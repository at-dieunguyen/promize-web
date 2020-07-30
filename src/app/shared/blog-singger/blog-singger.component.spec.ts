import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSinggerComponent } from './blog-singger.component';

describe('BlogSinggerComponent', () => {
  let component: BlogSinggerComponent;
  let fixture: ComponentFixture<BlogSinggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogSinggerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogSinggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
