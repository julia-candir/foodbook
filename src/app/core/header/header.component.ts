import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { DataStorageService } from '../../shared/data-storage.service';
import { HttpEvent } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(private dataStorageService: DataStorageService, private authService: AuthService) {}
  onSaveData() {
    this.dataStorageService.storeRecipes().subscribe((response: HttpEvent<Object>) => {
      console.log(response);
    });
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
  }

  onLogout() {
    this.authService.logOut();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
}
