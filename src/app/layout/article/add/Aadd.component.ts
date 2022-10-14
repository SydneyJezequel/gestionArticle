import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ArticleService} from "../../../_services/articleservice.service";
import {ArticleAdd} from "../../../model/ArticleAdd";
import {DepotService} from "../../../_services/depotservice.service";
import {Depot} from "../../../model/Depot";


@Component({
  selector: 'app-aadd',
  templateUrl: './Aadd.component.html',
  styleUrls: ['./Aadd.component.scss']
})


export class AaddComponent implements OnInit {


  // Attributs :
  createForm: FormGroup;
  public depots!:Depot[];
  depot!:Depot;


  // Constructeur :
  constructor(private articleService:ArticleService, private fb:FormBuilder, private depotService:DepotService) {
    this.createForm = new FormGroup({
      designation: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      prix: new FormControl('', Validators.required),
      quantite: new FormControl('', Validators.required),
      depot: new FormControl('', Validators.required)
    })
  }


  ngOnInit(): void {
    this.selectDepots();
  }


  // Méthodes :
  addArticle($event: MouseEvent)
  {
    $event.preventDefault();
    const article: ArticleAdd = new ArticleAdd(
      this.createForm.controls["designation"].value,
      this.createForm.controls["date"].value,
      this.createForm.controls["prix"].value,
      this.createForm.controls["quantite"].value,
      this.createForm.controls["depot"].value,
    );
    console.log(article);
    this.articleService.addArticle(article).subscribe(
      (response) =>
      {
        console.log(response);
        //window.location.assign("http://localhost:4200/professeur/all");
      }
    )
  }


  selectDepots()
  {
    this.depotService.getDepots().subscribe(
      (response :Depot[]) =>
      {
        this.depots = response;
      })
  }



}
