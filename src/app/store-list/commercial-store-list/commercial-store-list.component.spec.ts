import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialStoreListComponent } from './commercial-store-list.component';

describe('CommercialStoreListComponent', () => {
  let component: CommercialStoreListComponent;
  let fixture: ComponentFixture<CommercialStoreListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommercialStoreListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommercialStoreListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
