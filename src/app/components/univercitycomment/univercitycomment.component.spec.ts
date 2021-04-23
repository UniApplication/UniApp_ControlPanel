import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnivercitycommentComponent } from './univercitycomment.component';

describe('UnivercitycommentComponent', () => {
  let component: UnivercitycommentComponent;
  let fixture: ComponentFixture<UnivercitycommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnivercitycommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnivercitycommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
