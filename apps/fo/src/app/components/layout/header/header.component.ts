import { Component } from '@angular/core';
import { AuthService } from '../../../modules/auth/services/auth.service';

@Component({
  selector: 'fo-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  // /!\ encapsulation
  constructor(public authService: AuthService) { }

}
