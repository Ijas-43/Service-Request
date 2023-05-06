import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentialStoreListComponent } from './residential-store-list.component';

describe('ResidentialStoreListComponent', () => {
  let component: ResidentialStoreListComponent;
  let fixture: ComponentFixture<ResidentialStoreListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResidentialStoreListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResidentialStoreListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
