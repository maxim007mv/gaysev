import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OclibComponent } from './oclib.component';

describe('OclibComponent', () => {
  let component: OclibComponent;
  let fixture: ComponentFixture<OclibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OclibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OclibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
