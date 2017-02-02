import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { LoginComponent } from './login';
import { NoContentComponent } from './no-content';
import { AuthService } from './auth.service';
import { CanActivateViaAuthGuard} from './CanActivateViaAuthGuard'
import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'detail', loadChildren: './+detail#DetailModule'},
  { path: 'map', canActivate :[CanActivateViaAuthGuard],  loadChildren: './+barrel#BarrelModule'},
  { path: 'secure', canActivate:[CanActivateViaAuthGuard], loadChildren : './secure#SecureModule'},
  { path: 'mobile', loadChildren : './mobile#MobileModule'},
  { path: 'login', component : LoginComponent },
  { path: '**',    component: NoContentComponent }
 
];
