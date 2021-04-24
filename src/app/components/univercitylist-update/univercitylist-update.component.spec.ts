import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnivercitylistUpdateComponent } from './univercitylist-update.component';

describe('UnivercitylistUpdateComponent', () => {
  let component: UnivercitylistUpdateComponent;
  let fixture: ComponentFixture<UnivercitylistUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnivercitylistUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnivercitylistUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
