import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Blog2columnComponent } from './blog2column.component';

describe('Blog2columnComponent', () => {
  let component: Blog2columnComponent;
  let fixture: ComponentFixture<Blog2columnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Blog2columnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Blog2columnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
