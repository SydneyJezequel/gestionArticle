import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AallComponent} from "./all/Aall.component";
import {AupdateComponent} from "./update/Aupdate.component";
import {AaddComponent} from "./add/Aadd.component";

const routes: Routes = [
  { path: '', redirectTo: 'all', pathMatch: 'full'},
  { path:'all',component: AallComponent },
  { path:'edit/:id',component: AupdateComponent},
  { path:'add',component: AaddComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class ArticleRoutingModule { }
