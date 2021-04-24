import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnivercityListComponent } from './univercity-list.component';

describe('UnivercityListComponent', () => {
  let component: UnivercityListComponent;
  let fixture: ComponentFixture<UnivercityListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnivercityListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnivercityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
