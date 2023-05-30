import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  public userForm!: FormGroup;
  isChecked = true;

  constructor(
    private formBuilder: FormBuilder,
    private dialoRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.initialForm();
  }

  ngOnInit(): void {
    if (this.data.action === 'edit') {
      this.userForm.patchValue(this.data.editData);
    }
  }


  initialForm() {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      address: ['', Validators.required],
    });
  }


  saveUserData() {
    console.log(this.userForm.value);
    this.dialoRef.close(this.userForm.value);
  }

  onCancel() {
    this.dialoRef.close();
  }
}
