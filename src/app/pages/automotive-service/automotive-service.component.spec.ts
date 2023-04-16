import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomotiveServiceComponent } from './automotive-service.component';

describe('AutomotiveServiceComponent', () => {
  let component: AutomotiveServiceComponent;
  let fixture: ComponentFixture<AutomotiveServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutomotiveServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutomotiveServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
