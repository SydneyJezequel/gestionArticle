import { ComponentFixture, TestBed } from '@angular/core/testing';

import {AallComponent} from './Aall.component';

describe('AllComponent', () => {
  let component: AallComponent;
  let fixture: ComponentFixture<AallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
