import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'challenge-bten-front';

  constructor(
    private authService: AuthService
  ) {
    if(!this.authService.isAutenticado()) this.authService.logout()
  }
  
}
