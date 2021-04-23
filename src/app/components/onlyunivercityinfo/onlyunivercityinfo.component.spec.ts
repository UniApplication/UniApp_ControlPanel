import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlyunivercityinfoComponent } from './onlyunivercityinfo.component';

describe('OnlyunivercityinfoComponent', () => {
  let component: OnlyunivercityinfoComponent;
  let fixture: ComponentFixture<OnlyunivercityinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlyunivercityinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlyunivercityinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
