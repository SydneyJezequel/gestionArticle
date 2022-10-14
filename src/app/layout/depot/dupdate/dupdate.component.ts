import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Depot} from "../../../model/Depot";
import {ArticleService} from "../../../_services/articleservice.service";
import {DepotService} from "../../../_services/depotservice.service";
import {ArticleAdd} from "../../../model/ArticleAdd";

@Component({
  selector: 'app-dupdate',
  templateUrl: './dupdate.component.html',
  styleUrls: ['./dupdate.component.scss']
})
export class DupdateComponent implements OnInit {


  // Attributs :
  createForm: FormGroup;


  // Constructeur :
  constructor(private depotService:DepotService, private fb:FormBuilder) {
    this.createForm = new FormGroup({
      id: new FormControl('', Validators.required),
      nom: new FormControl('', Validators.required),
    })
  }


  ngOnInit(): void {}


  // Méthodes :
  editDepot($event: MouseEvent)
  {
    $event.preventDefault();
    const depot: Depot = new Depot(
      this.createForm.controls["id"].value,
      this.createForm.controls["nom"].value,
    );
    console.log(depot);
    this.depotService.updateDepot(depot).subscribe(
      (response) =>
      {
        console.log(response)
        //window.location.assign("http://localhost:4200/professeur/all");
      }
    )
  }

}
