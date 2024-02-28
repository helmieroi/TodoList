import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GlobalDataService } from '../context/globalData.servise';
@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(private globalDataService: GlobalDataService){
    this.setDarkTheme(!!globalDataService.getItemData('isDarkTheme'))
  }
  private darkThemeSubject = new BehaviorSubject<boolean>(false);
  darkTheme = this.darkThemeSubject.asObservable();

  setDarkTheme(isDarkTheme: boolean): void {

    this.darkThemeSubject.next(isDarkTheme);
  }
}