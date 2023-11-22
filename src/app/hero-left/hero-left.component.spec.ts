import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroLeftComponent } from './hero-left.component';

describe('HeroLeftComponent', () => {
  let component: HeroLeftComponent;
  let fixture: ComponentFixture<HeroLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroLeftComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeroLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
