import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {DepotService} from "../../../_services/depotservice.service";
import {Depot} from "../../../model/Depot";
import {ArticleService} from "../../../_services/articleservice.service";
import {Article} from "../../../model/Article";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-aupdate',
  templateUrl: './Aupdate.component.html',
  styleUrls: ['./Aupdate.component.scss']
})
export class AupdateComponent implements OnInit {


  // Attributs :
  createForm: FormGroup;
  depots!:Depot[];
  article!: Article;


  // Constructeur :
  constructor(private route:ActivatedRoute, private articleService:ArticleService, private depotService:DepotService, private fb:FormBuilder) {
    this.createForm = new FormGroup({
      id: new FormControl(this.route.snapshot.paramMap.get('id') as unknown as number, Validators.required),
      designation: new FormControl(this.route.snapshot.paramMap.get('designation'), Validators.required),
      date: new FormControl(this.route.snapshot.paramMap.get('date'), Validators.required),
      prix: new FormControl(this.route.snapshot.paramMap.get('prix'), Validators.required),
      quantite: new FormControl(this.route.snapshot.paramMap.get('quantite'), Validators.required),
      depot: new FormControl(this.route.snapshot.paramMap.get('depot'), Validators.required)
    })
  }


  ngOnInit(): void {

    /*let id = this.route.snapshot.paramMap.get('id');
    let idNumber = id as unknown as number;
    this.articleService.getArticle(idNumber).subscribe(
      (response:any) =>
      {
        this.article= response;
        console.log(this.article); // DEBUG 2
      })*/

    this.selectDepots();
  }


  // Méthodes :
  editArticle($event: MouseEvent)
  {
    $event.preventDefault();

    const article: Article = new Article(
      this.createForm.controls["id"].value,
      this.createForm.controls["designation"].value,
      this.createForm.controls["date"].value,
      this.createForm.controls["prix"].value,
      this.createForm.controls["quantite"].value,
      this.createForm.controls["depot"].value,
    );
    console.log(article);
    this.articleService.updateArticle(article).subscribe(
      (response) =>
      {
        console.log(response)
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
