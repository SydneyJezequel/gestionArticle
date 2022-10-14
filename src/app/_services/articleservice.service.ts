import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Article} from "../model/Article";
import {ArticleAdd} from "../model/ArticleAdd";
import {ArticleTransfert} from "../model/ArticleTransfert";


@Injectable({
  providedIn: 'root'
})


export class ArticleService {


  // Attributs :
  private all:string="api/article/all";
  private update:string="api/article/update";
  private delete:string="api/article/delete/";
  private add:string="api/article/add";
  private find:string = "api/article/find/";


  // Constructeur :
  constructor(private http:HttpClient) { }


  // Méthodes :
  public getArticles():Observable<Article[]>
  {
    return this.http.get<Article[]>(this.all);
  }

  public getArticle(id: number):Observable<Article>
  {
    console.log(this.find);
    return this.http.get<Article>(this.find + id);
  }

  public addArticle(article: ArticleAdd):Observable<ArticleAdd>
  {
    console.log('service article :' + article.designation);
    console.log('service article :' + article.depot);
    console.log('service article :' + article.dateEntre);
    console.log('service article :' + article.prix);
    // let designation = article.designation;
    // let depot = article.depot.toString();
    // let date = article.dateEntre.toString();
    // let quantite = article.quantite;
    // let prix = article.prix;
    // let articleTransfert = new ArticleTransfert(designation, date,prix,quantite,depot);
    // console.log(articleTransfert);
    return this.http.post<ArticleAdd>(this.add, article);
  }

  public updateArticle(article: Article):Observable<Article>
  {
    return this.http.put<Article>(this.update, article);
  }

  public deleteArticle(id: number):Observable<void>
  {
    return this.http.delete<void>( this.delete + id);
  }




}
