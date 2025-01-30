import { Routes } from '@angular/router';
import { IndexComponent } from './features/index/index.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: IndexComponent },

];
