import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GDL CulturApp';

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(
    private router: Router
  ){
  }

  ngOnInit(){
    let link = ['/home']; 
    this.router.navigate(link);
  }

  goHome() {
    let link = ['/home']; 
    this.router.navigate(link);
  }

  goStories() {
    let link = ['/stories']; 
    this.router.navigate(link);
  }

  goHistory() {
    let link = ['/history']; 
    this.router.navigate(link);
  }

  goGdl() {
    let link = ['/gdl']; 
    this.router.navigate(link);
  }

}
