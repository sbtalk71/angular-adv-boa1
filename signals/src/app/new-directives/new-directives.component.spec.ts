import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDirectivesComponent } from './new-directives.component';

describe('NewDirectivesComponent', () => {
  let component: NewDirectivesComponent;
  let fixture: ComponentFixture<NewDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewDirectivesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
