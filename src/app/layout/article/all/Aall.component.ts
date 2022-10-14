import { Component, OnInit } from '@angular/core';
import {Article} from "../../../model/Article";
import {HttpErrorResponse} from "@angular/common/http";
import {ArticleService} from "../../../_services/articleservice.service";

@Component({
  selector: 'app-aall',
  templateUrl: './Aall.component.html',
  styleUrls: ['./Aall.component.scss']
})
export class AallComponent implements OnInit {


  // Méthodes :
  public articles!: Article[];


  // Constructeur :
  constructor(private articleService : ArticleService) { }


  ngOnInit(): void {
    this.getArticles();
  }


  // Méthodes :
  public getArticles():void
  {
    this.articleService.getArticles().subscribe(
      (response: Article[]) =>
      {
        this.articles = response;
      },
      (error:HttpErrorResponse) =>
      {
        alert(error.message);
      }
    )
  }


  deleteArticle(id: number)
  {
    this.articleService.deleteArticle(id).subscribe(
      (response) => {
        console.log(response);
        window.location.reload();
      }
    )
  }
}
