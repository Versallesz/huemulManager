import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentProfile } from './apartment-profile';

describe('ApartmentProfile', () => {
  let component: ApartmentProfile;
  let fixture: ComponentFixture<ApartmentProfile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApartmentProfile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApartmentProfile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
