import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnivercityDetailComponent } from './univercity-detail.component';

describe('UnivercityDetailComponent', () => {
  let component: UnivercityDetailComponent;
  let fixture: ComponentFixture<UnivercityDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnivercityDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnivercityDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
