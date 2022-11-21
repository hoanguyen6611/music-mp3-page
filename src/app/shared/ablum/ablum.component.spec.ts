import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AblumComponent } from './ablum.component';

describe('AblumComponent', () => {
  let component: AblumComponent;
  let fixture: ComponentFixture<AblumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AblumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AblumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
