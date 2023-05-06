import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentialStoreDetailsComponent } from './residential-store-details.component';

describe('ResidentialStoreDetailsComponent', () => {
  let component: ResidentialStoreDetailsComponent;
  let fixture: ComponentFixture<ResidentialStoreDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResidentialStoreDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResidentialStoreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
