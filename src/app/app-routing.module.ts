import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route,  } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TablesComponent } from './tables/tables.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { FormsComponent } from './forms/forms.component';


const fallbackRoute: Route = {
  path: '**', redirectTo: '/notfound', pathMatch: 'full'
  };

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'notfound', component: NotFoundComponent },
  { path: 'dashboard', component: DashboardComponent,
  },
  { path: 'login', component: LoginComponent},
  { path: 'forms', component: FormsComponent}
  { path: 'tables', component: TablesComponent,
   canActivate: [AuthGuard], },
  { path: 'tables/:type', component: TablesComponent,
  canActivate: [AuthGuard],
},
  {
    path: 'charts',
    loadChildren: './charts/charts.module#ChartsModule'
  },
  fallbackRoute

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
  }) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
