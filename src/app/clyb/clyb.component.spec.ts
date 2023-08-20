import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClybComponent } from './clyb.component';

describe('ClybComponent', () => {
  let component: ClybComponent;
  let fixture: ComponentFixture<ClybComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClybComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClybComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
