import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class GlobalDataService {
  globalData: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) 
  {
    // Initialize globalData, including isDarkTheme, based on localStorage
    this.globalData = {
      isDarkTheme: this.getItemData('isDarkTheme') === 'true' // Convert to boolean
    };
  }

  setGlobalData(data: any): void { 
    this.globalData = data;
  }

  getGlobalData(): any {
    return this.globalData;
  }

  setItemData(key: string, data: any): void { 
      localStorage.setItem(key, data); 
    this.globalData = { ...this.globalData, [key]: data };
  }

  getItemData(key: string): any { 
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem(key);
    } else {
      // Handle non-browser environments (e.g., server-side rendering)
      return null;
    }
  }
}
