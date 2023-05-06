import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomotiveStoreListComponent } from './automotive-store-list.component';

describe('AutomotiveStoreListComponent', () => {
  let component: AutomotiveStoreListComponent;
  let fixture: ComponentFixture<AutomotiveStoreListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutomotiveStoreListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutomotiveStoreListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
