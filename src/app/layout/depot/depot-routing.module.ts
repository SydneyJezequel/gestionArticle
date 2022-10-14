import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DallComponent} from "./dall/dall.component";
import {DupdateComponent} from "./dupdate/dupdate.component";
import {DaddComponent} from "./dadd/dadd.component";

const routes: Routes = [
    { path: '', redirectTo: 'all', pathMatch: 'full'},
    { path:'all',component: DallComponent },
    { path:'edit/:id',component: DupdateComponent},
    { path:'add',component: DaddComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class DepotRoutingModule { }
