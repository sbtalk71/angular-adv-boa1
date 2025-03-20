import { Routes } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { AppRefComponent } from './app-ref/app-ref.component';

export const routes: Routes = [
    {path:'',component:UserFormComponent},
    {path:'appref',component:AppRefComponent}

];
