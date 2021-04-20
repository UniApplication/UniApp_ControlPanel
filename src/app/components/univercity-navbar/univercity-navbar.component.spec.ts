import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnivercityNavbarComponent } from './univercity-navbar.component';

describe('UnivercityNavbarComponent', () => {
  let component: UnivercityNavbarComponent;
  let fixture: ComponentFixture<UnivercityNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnivercityNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnivercityNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
