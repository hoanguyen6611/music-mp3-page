import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AblumDetailComponent } from './ablum-detail.component';

describe('AblumDetailComponent', () => {
  let component: AblumDetailComponent;
  let fixture: ComponentFixture<AblumDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AblumDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AblumDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
