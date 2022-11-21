import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerPlaybackComponent } from './player-playback.component';

describe('PlayerPlaybackComponent', () => {
  let component: PlayerPlaybackComponent;
  let fixture: ComponentFixture<PlayerPlaybackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerPlaybackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerPlaybackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
