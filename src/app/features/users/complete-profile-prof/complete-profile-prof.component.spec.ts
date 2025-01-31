import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteProfileProfComponent } from './complete-profile-prof.component';

describe('CompleteProfileProfComponent', () => {
  let component: CompleteProfileProfComponent;
  let fixture: ComponentFixture<CompleteProfileProfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompleteProfileProfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompleteProfileProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
