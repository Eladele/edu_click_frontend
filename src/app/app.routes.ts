import { Routes } from '@angular/router';
import { IndexComponent } from './features/index/index.component';
import { LoginComponent } from './features/users/login/login.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: IndexComponent },
    { path: 'login', component: LoginComponent },

];
