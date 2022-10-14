import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaddComponent } from './dadd.component';

describe('AddComponent', () => {
  let component: DaddComponent;
  let fixture: ComponentFixture<DaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
