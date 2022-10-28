import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewpolicyComponent } from './addnewpolicy.component';

describe('AddnewpolicyComponent', () => {
  let component: AddnewpolicyComponent;
  let fixture: ComponentFixture<AddnewpolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnewpolicyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddnewpolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
