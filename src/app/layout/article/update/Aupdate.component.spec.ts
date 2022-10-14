import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AupdateComponent } from './Aupdate.component';

describe('UpdateComponent', () => {
  let component: AupdateComponent;
  let fixture: ComponentFixture<AupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
