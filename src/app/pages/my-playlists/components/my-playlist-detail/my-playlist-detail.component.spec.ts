import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPlaylistDetailComponent } from './my-playlist-detail.component';

describe('MyPlaylistDetailComponent', () => {
  let component: MyPlaylistDetailComponent;
  let fixture: ComponentFixture<MyPlaylistDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPlaylistDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyPlaylistDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
