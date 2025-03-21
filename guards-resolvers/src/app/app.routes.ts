import { ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { StoreComponent } from './store/store.component';
import { authGuard } from './guards/auth.guard';
import { AuthGuard2} from './guards/auth2.guard';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { unsavedGuard } from './guards/unsaved.guard';
import { AppComponent } from './app.component';
import { productResolver } from './resolvers/product.resolver';
import { ResourceComponent } from './resource/resource.component';

export const routes: Routes = [
    {path:'',component:AppComponent},
    {path:'login',component:LoginComponent},
    {path:'admin',component:AdminComponent,canActivate:[authGuard]},
    {path:'unauthorized',component:UnauthorizedComponent},
    {path:'store',component:StoreComponent,resolve:{productData:productResolver}},
    {path:'edit',component:EditProfileComponent,canDeactivate:[unsavedGuard]},
    {path:'manage',redirectTo:()=>{
        const isLoggedIn=false;
        return isLoggedIn?'/resource':'/login';
    },pathMatch:'full'},

    {path:'resource',component:ResourceComponent}

];
