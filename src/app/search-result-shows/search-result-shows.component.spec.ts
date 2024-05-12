import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultShowsComponent } from './search-result-shows.component';

describe('SearchResultShowsComponent', () => {
  let component: SearchResultShowsComponent;
  let fixture: ComponentFixture<SearchResultShowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchResultShowsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchResultShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
