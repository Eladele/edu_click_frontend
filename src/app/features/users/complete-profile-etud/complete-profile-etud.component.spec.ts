import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteProfileEtudComponent } from './complete-profile-etud.component';

describe('CompleteProfileEtudComponent', () => {
  let component: CompleteProfileEtudComponent;
  let fixture: ComponentFixture<CompleteProfileEtudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompleteProfileEtudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompleteProfileEtudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
