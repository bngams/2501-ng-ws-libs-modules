import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

// Function guards
// export const authGuard: CanActivateFn = (route, state) => {
//   return true;
// };


export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    if (this.authService.isLoggedIn) {
      return true;
    } else {
      this.router.navigate(['/auth']);
      return false;
    }
  }
}
