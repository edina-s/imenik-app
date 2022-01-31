import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsAllComponent } from './items-all.component';

describe('ItemsAllComponent', () => {
  let component: ItemsAllComponent;
  let fixture: ComponentFixture<ItemsAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
