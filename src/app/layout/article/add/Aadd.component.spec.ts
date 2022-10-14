import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AaddComponent } from './Aadd.component';

describe('AddComponent', () => {
  let component: AaddComponent;
  let fixture: ComponentFixture<AaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AaddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
