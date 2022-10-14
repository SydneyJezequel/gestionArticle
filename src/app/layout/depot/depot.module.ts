import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DallComponent} from "./dall/dall.component";
import {DupdateComponent} from "./dupdate/dupdate.component";
import {DaddComponent} from "./dadd/dadd.component";
import {DepotRoutingModule} from "./depot-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";




@NgModule({
  declarations: [
    DallComponent,
    DaddComponent,
    DupdateComponent
  ],
  imports: [
    CommonModule,
    DepotRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class DepotModule { }
