import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstfotoComponent } from './instfoto.component';

describe('InstfotoComponent', () => {
  let component: InstfotoComponent;
  let fixture: ComponentFixture<InstfotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstfotoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstfotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
