import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DallComponent } from './dall.component';

describe('AllComponent', () => {
  let component: DallComponent;
  let fixture: ComponentFixture<DallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
