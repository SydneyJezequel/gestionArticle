import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ArticleService} from "../../../_services/articleservice.service";
import {ArticleAdd} from "../../../model/ArticleAdd";
import {DepotService} from "../../../_services/depotservice.service";
import {DepotAdd} from "../../../model/DepotAdd";

@Component({
  selector: 'app-dadd',
  templateUrl: './dadd.component.html',
  styleUrls: ['./dadd.component.scss']
})
export class DaddComponent implements OnInit {


  // Attributs :
  createForm: FormGroup;


  // Constructeur :
  constructor(private depotService:DepotService, private fb:FormBuilder) {
    this.createForm = new FormGroup({
      nom: new FormControl('', Validators.required),
    })
  }

  ngOnInit(): void {
  }


  // Méthodes :
  addDepot($event: MouseEvent)
  {
    $event.preventDefault();
    const depot: DepotAdd = new DepotAdd(
      this.createForm.controls["nom"].value,
    );
    console.log(depot);
    this.depotService.addDepot(depot).subscribe(
      (response) =>
      {
        console.log(response)
        //window.location.assign("http://localhost:4200/professeur/all");
      }
    )
  }

}
