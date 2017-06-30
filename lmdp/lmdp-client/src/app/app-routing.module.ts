import { Routes } from '@angular/router'; 
import { RouterModule } from '@angular/router';
import { PreloadAllModules } from '@angular/router';
import { LoginComponent } from './login/login.component'; 
import { DashboardComponent } from './dashboard/dashboard.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent  },
    { path: 'dashboard', component: DashboardComponent }
]

export const routing = RouterModule.forRoot(appRoutes, {
    useHash : true,
    preloadingStrategy: PreloadAllModules 
});  
