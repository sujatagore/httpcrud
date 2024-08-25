import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostscardComponent } from './postscard.component';

describe('PostscardComponent', () => {
  let component: PostscardComponent;
  let fixture: ComponentFixture<PostscardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostscardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostscardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
