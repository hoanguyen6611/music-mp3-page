import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaNumberComponent } from './media-number.component';

describe('MediaNumberComponent', () => {
  let component: MediaNumberComponent;
  let fixture: ComponentFixture<MediaNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaNumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
