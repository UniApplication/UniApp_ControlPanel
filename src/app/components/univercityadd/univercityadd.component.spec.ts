import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnivercityaddComponent } from './univercityadd.component';

describe('UnivercityaddComponent', () => {
  let component: UnivercityaddComponent;
  let fixture: ComponentFixture<UnivercityaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnivercityaddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnivercityaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
