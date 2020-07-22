import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingerProductComponent } from './singer-product.component';

describe('SingerProductComponent', () => {
  let component: SingerProductComponent;
  let fixture: ComponentFixture<SingerProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingerProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingerProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
