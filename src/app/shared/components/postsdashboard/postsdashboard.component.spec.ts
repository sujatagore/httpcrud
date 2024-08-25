import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsdashboardComponent } from './postsdashboard.component';

describe('PostsdashboardComponent', () => {
  let component: PostsdashboardComponent;
  let fixture: ComponentFixture<PostsdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostsdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
