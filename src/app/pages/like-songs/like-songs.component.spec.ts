import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeSongsComponent } from './like-songs.component';

describe('LikeSongsComponent', () => {
  let component: LikeSongsComponent;
  let fixture: ComponentFixture<LikeSongsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikeSongsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LikeSongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
