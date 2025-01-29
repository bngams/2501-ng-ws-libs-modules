import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AuthGuard } from './modules/auth/guards/auth.guard';

// type Routes = Route[]
const routes: Routes = [
  { path:'', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  // Lazy load with load children
  {
    path: 'products',
    loadChildren: () => import('./modules/product/product.module').then(m => m.ProductModule),
    canLoad: [AuthGuard] // AuthGuard is a service that implements CanLoad interface
  },
  // TODO: this AuthModule should be in core lib...
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  { path: '**', component: NotFoundComponent }, // '**' like Regex captures all
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
