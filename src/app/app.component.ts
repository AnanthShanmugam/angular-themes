import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'themes';
  storedTheme:string;


  ngOnInit(){
    let theme = localStorage.getItem('theme');
    this.storedTheme = theme;
  }

  
  storeTheme(theme){
    localStorage.setItem('theme',theme);
    this.storedTheme = theme;
  }
}
