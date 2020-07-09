import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogTwocolumnComponent } from './blog-twocolumn.component';

describe('BlogTwocolumnComponent', () => {
  let component: BlogTwocolumnComponent;
  let fixture: ComponentFixture<BlogTwocolumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogTwocolumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogTwocolumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
