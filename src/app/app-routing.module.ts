import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './service/auth-guard.service';
import { UserNotFoundComponent } from './user-not-found/user-not-found.component';
import { UserCreateUpdateComponent } from './user/user-create-update/user-create-update.component';
import { UserListingComponent } from './user/user-listing/user-listing.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: UserListingComponent, canActivate: [AuthGuardService] },
  {
    path: "user/create",
    component: UserCreateUpdateComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: "user/edit/:id",
    component: UserCreateUpdateComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: "user/single/:id",
    component: UserCreateUpdateComponent,
    canActivate: [AuthGuardService],
  },

  {
    path: "user-not-found",
    component: UserNotFoundComponent,
    canActivate: [AuthGuardService],
  },
  {path:'login',component:LoginComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
