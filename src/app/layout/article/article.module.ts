import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AallComponent} from "./all/Aall.component";
import {AaddComponent} from "./add/Aadd.component";
import {AupdateComponent} from "./update/Aupdate.component";
import {ArticleRoutingModule} from "./article-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";




@NgModule({
  declarations: [
    AallComponent,
    AaddComponent,
    AupdateComponent
  ],
    imports: [
        CommonModule,
        ArticleRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class ArticleModule { }
