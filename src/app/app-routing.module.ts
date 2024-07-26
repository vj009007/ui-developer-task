import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {TrusteesComponent} from './trustees/trustees.component';
import {ProfessionalsComponent} from './professionals/professionals.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'trustees', component: TrusteesComponent },
  { path: 'professionals', component: ProfessionalsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
