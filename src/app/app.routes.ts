import { Routes } from "@angular/router";
import { IndexComponent } from "./features/index/index.component";
import { LoginComponent } from "./features/users/login/login.component";
import { CompleteProfileProfComponent } from "./features/users/complete-profile-prof/complete-profile-prof.component";
import { CompleteProfileEtudComponent } from "./features/users/complete-profile-etud/complete-profile-etud.component";
import { EtudiantProfileComponent } from "./features/etudiants/etudiant-profile/etudiant-profile.component";
import { AuthGuard } from "./core/guards/auth.guard";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full",
  },
  {
    path: "home",
    component: IndexComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
  // {
  //   path: "complete-profile-prof",
  //   component: CompleteProfileProfComponent,
  // },
  // {
  //   path: "complete-profile-etud",
  //   component: CompleteProfileEtudComponent,
  // },
  // {
  //   path: "etudiant/profile",
  //   component: EtudiantProfileComponent,
  // },
  { path: "complete-profile-prof", component: CompleteProfileProfComponent, canActivate: [AuthGuard] },
  { path: "complete-profile-etud", component: CompleteProfileEtudComponent, canActivate: [AuthGuard] },
  { path: "etudiant/profile", component: EtudiantProfileComponent, canActivate: [AuthGuard]}
];
