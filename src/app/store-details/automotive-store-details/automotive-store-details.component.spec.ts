import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomotiveStoreDetailsComponent } from './automotive-store-details.component';

describe('AutomotiveStoreDetailsComponent', () => {
  let component: AutomotiveStoreDetailsComponent;
  let fixture: ComponentFixture<AutomotiveStoreDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutomotiveStoreDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutomotiveStoreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
