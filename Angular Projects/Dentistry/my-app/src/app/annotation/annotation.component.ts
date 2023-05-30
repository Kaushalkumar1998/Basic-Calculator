import { Component, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { PinturaEditorComponent } from '@pqina/angular-pintura';

// pintura
import {
  LocaleCore,
  LocaleCrop,
  LocaleFinetune,
  LocaleFilter,
  LocaleAnnotate,
  LocaleMarkupEditor,
} from '@pqina/pintura/locale/en_GB';

import {
  // editor
  createDefaultImageReader,
  createDefaultImageWriter,
  createDefaultShapePreprocessor,

  // plugins
  setPlugins,
  plugin_finetune,
  plugin_finetune_defaults,
  plugin_filter_defaults,
  plugin_annotate,
  markup_editor_defaults,
} from '@pqina/pintura';

setPlugins(plugin_finetune, plugin_annotate);

@Component({
  selector: 'app-annotation',
  templateUrl: './annotation.component.html',
  styleUrls: ['./annotation.component.scss'],
})
export class AnnotationComponent {
  @ViewChild('inlineEditor') inlineEditor?: PinturaEditorComponent<any> =
    undefined;
  enableZoomControls: boolean = false;

  constructor(private sanitizer: DomSanitizer) {}

  // editor generic state
  editorOptions: any = {
    imageReader: createDefaultImageReader(),
    imageWriter: createDefaultImageWriter(),
    shapePreprocessor: createDefaultShapePreprocessor(),
    ...plugin_finetune_defaults,
    ...plugin_filter_defaults,
    ...markup_editor_defaults,
    locale: {
      ...LocaleCore,
      ...LocaleCrop,
      ...LocaleFinetune,
      ...LocaleFilter,
      ...LocaleAnnotate,
      ...LocaleMarkupEditor,
    },
  };

  // inline
  inlineSrc: string = '';
  inlineResult?: string = undefined;
  inlineCropAspectRatio = 1;

  handleInlineLoad($event: any) {
    console.log('inline load', $event);

    console.log('inline component ref', this.inlineEditor);

    console.log('inline editor instance ref', this.inlineEditor?.editor);

    console.log(
      'inline editor image state',
      this.inlineEditor?.editor?.imageState
    );
  }

  handleInlineProcess($event: any) {
    console.log('inline process', $event);

    const objectURL = URL.createObjectURL($event.dest);
    this.inlineResult = this.sanitizer.bypassSecurityTrustResourceUrl(
      objectURL
    ) as string;
  }

  handleEvent = (type: string, detail: any): void => {
    // Log all editor events to console
    //  console.log(type, detail);
  };

  onChange(event: any) {
    if (event.target.files[0]) {
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.inlineSrc = event.target.result;
      };
    }
  }
}
