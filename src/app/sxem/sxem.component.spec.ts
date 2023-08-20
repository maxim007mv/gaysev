import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SxemComponent } from './sxem.component';

describe('SxemComponent', () => {
  let component: SxemComponent;
  let fixture: ComponentFixture<SxemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SxemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SxemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
