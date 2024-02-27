import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component"
import { ReactiveFormsModule , } from '@angular/forms'; 
import { ThemeService } from './theme/theme.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive,HeaderComponent,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TodoList';  
  @Input() darkTheme :boolean = !!this.themeService.darkTheme;
 constructor(private themeService: ThemeService) { 
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


}
 