import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute,RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routerAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1000ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('1000ms', style({ opacity: 0 }))
      ])
    ])
  ]
})

export class AppComponent implements OnInit {

  currentRoute: string = '';
  lastSearchQuery: string = '';
  showInput: boolean = true; 
  inputValue: any;
  timer: any; 

  constructor(private router: Router, private route: ActivatedRoute) { }
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
  ngOnInit() {
    
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.currentRoute = event.urlAfterRedirects;

      if (this.currentRoute.includes('show-details') || this.currentRoute.includes('movie-details')) {
        this.showInput = false;
      } else {
        this.showInput = true;
      }

     
      if ((this.currentRoute === '/movies' || this.currentRoute === '/shows') && this.lastSearchQuery) {
        if (this.currentRoute === '/movies') {
          this.inputValue = this.lastSearchQuery;
          this.router.navigate(['/search-results'], { queryParams: { q: this.inputValue } });
        } else if (this.currentRoute === '/shows') {
          this.inputValue = this.lastSearchQuery;
          this.router.navigate(['/search-result-shows'], { queryParams: { q: this.inputValue } });
        }
      }
    });
  }

  onSearchInput(event: any) {
    clearTimeout(this.timer); 

    const query = event.target.value;
    this.inputValue = query;
    this.lastSearchQuery = query;

   
    this.timer = setTimeout(() => {
      if (query.length >= 3) {
        if (this.currentRoute === '/movies') {
          this.router.navigate(['/search-results'], { queryParams: { q: query } });
        } else if (this.currentRoute === '/shows') {
          this.router.navigate(['/search-result-shows'], { queryParams: { q: query } });
        
        }
      } else if (query.length < 3) {
        if (this.currentRoute.includes('/search-results')) {
          this.router.navigate(['/movies']);
        } else if (this.currentRoute.includes('/search-result-shows')) {
          this.router.navigate(['/shows']);
        }
      }
    }, 1000); 
  }
}
