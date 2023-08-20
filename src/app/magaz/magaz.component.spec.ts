import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagazComponent } from './magaz.component';

describe('MagazComponent', () => {
  let component: MagazComponent;
  let fixture: ComponentFixture<MagazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagazComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
