import { Component, OnInit } from '@angular/core';
import {Article} from "../../../model/Article";
import {ArticleService} from "../../../_services/articleservice.service";
import {HttpErrorResponse} from "@angular/common/http";
import {DepotService} from "../../../_services/depotservice.service";
import {Depot} from "../../../model/Depot";

@Component({
  selector: 'app-dall',
  templateUrl: './dall.component.html',
  styleUrls: ['./dall.component.scss']
})
export class DallComponent implements OnInit {


  // Attributs :
  public depots!: Depot[];


  // Constructeur :
  constructor(private depotService : DepotService) { }


  ngOnInit(): void {
    this.getDepots();
  }


  // Méthodes :
  public getDepots():void
  {
    this.depotService.getDepots().subscribe(
      (response: Depot[]) =>
      {
        this.depots = response;
      },
      (error:HttpErrorResponse) =>
      {
        alert(error.message);
      }
    )
  }


  deleteDepot(id: number)
  {
    this.depotService.deleteDepot(id).subscribe(
      (response) => {
        console.log(response);
        window.location.reload();
      }
    )
  }

}
