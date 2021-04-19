import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlyunivercityComponent } from './onlyunivercity.component';

describe('OnlyunivercityComponent', () => {
  let component: OnlyunivercityComponent;
  let fixture: ComponentFixture<OnlyunivercityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlyunivercityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlyunivercityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
