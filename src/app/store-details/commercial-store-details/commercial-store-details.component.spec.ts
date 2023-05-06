import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialStoreDetailsComponent } from './commercial-store-details.component';

describe('CommercialStoreDetailsComponent', () => {
  let component: CommercialStoreDetailsComponent;
  let fixture: ComponentFixture<CommercialStoreDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommercialStoreDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommercialStoreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
