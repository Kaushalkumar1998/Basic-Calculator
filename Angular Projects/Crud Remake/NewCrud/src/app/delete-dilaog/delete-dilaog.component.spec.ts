import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDilaogComponent } from './delete-dilaog.component';

describe('DeleteDilaogComponent', () => {
  let component: DeleteDilaogComponent;
  let fixture: ComponentFixture<DeleteDilaogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteDilaogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteDilaogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
