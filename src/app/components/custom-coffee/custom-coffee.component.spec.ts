import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCoffeeComponent } from './custom-coffee.component';

describe('CustomCoffeeComponent', () => {
  let component: CustomCoffeeComponent;
  let fixture: ComponentFixture<CustomCoffeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomCoffeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomCoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
