import { Component  } from '@angular/core';
import { ThemeService } from './theme/theme.service';
import { GlobalDataService } from './context/globalData.servise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp';
  darkTheme: boolean = !!this.themeService.darkTheme;
  constructor(private themeService: ThemeService,private globalData : GlobalDataService) { 
  }
  
  ngOnInit(): void {
   this.themeService.darkTheme.subscribe(darkTheme => {
     this.darkTheme = !!darkTheme;
   });
  
 
 } 
  // Method to toggle the dark theme
  toggleDarkTheme(): void {
    // Call the ThemeService method to update the dark theme state
    this.themeService.setDarkTheme(!this.themeService.darkTheme);
  }
  getThemeService():any{
   return this.themeService;
  }

}
