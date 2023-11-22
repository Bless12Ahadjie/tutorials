import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowBubbleComponent } from './follow-bubble.component';

describe('FollowBubbleComponent', () => {
  let component: FollowBubbleComponent;
  let fixture: ComponentFixture<FollowBubbleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FollowBubbleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FollowBubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
