import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { PreloadAllModules } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.components';
import { RideComponent } from './ride/ride.component';

const appRoutes: Routes = [
    { path: '', component: LoginComponent  },
    { path: 'login', component: LoginComponent  },
    { path: 'register', component: RegisterComponent },
    { path: 'home', component: HomeComponent  },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'ride', component: RideComponent }
]

export const routing = RouterModule.forRoot(appRoutes, {
    useHash : true,
    preloadingStrategy: PreloadAllModules 
});  
