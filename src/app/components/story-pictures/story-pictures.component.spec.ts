import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryPicturesComponent } from './story-pictures.component';

describe('StoryPicturesComponent', () => {
  let component: StoryPicturesComponent;
  let fixture: ComponentFixture<StoryPicturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoryPicturesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StoryPicturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
