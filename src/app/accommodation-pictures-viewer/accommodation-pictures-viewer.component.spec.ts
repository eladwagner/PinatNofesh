import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccommodationPicturesViewerComponent } from './accommodation-pictures-viewer.component';

describe('AccommodationPicturesViewerComponent', () => {
  let component: AccommodationPicturesViewerComponent;
  let fixture: ComponentFixture<AccommodationPicturesViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccommodationPicturesViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccommodationPicturesViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
