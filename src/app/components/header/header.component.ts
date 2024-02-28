import { Component, Input, OnInit } from '@angular/core'; 
import { Router } from '@angular/router';
import { ThemeService } from '../../theme/theme.service';
@Component({
  selector: 'app-header', 
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
}) 

export class HeaderComponent implements OnInit {
  constructor(private router:Router,
              private themeService: ThemeService) {} 

  @Input() darkTheme :boolean = !!this.themeService.darkTheme;
  ngOnInit(): void {
    this.themeService.darkTheme.subscribe(darkTheme => {
      this.darkTheme = darkTheme;
    });
  } 


  goPlaces(link:string) :void { 
    this.router.navigate([link]);
  }
  toggleDarkTheme(): void {
    this.themeService.setDarkTheme(!this.darkTheme); 
    
  }



  }