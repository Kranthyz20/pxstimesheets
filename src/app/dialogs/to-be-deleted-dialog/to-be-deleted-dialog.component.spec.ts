import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToBeDeletedDialogComponent } from './to-be-deleted-dialog.component';

describe('ToBeDeletedDialogComponent', () => {
  let component: ToBeDeletedDialogComponent;
  let fixture: ComponentFixture<ToBeDeletedDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToBeDeletedDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToBeDeletedDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
