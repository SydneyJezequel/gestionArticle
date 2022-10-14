import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Article} from "../model/Article";
import {Depot} from "../model/Depot";
import {Observable} from "rxjs";
import {DepotAdd} from "../model/DepotAdd";

@Injectable({
  providedIn: 'root'
})
export class DepotService {


  // Attributs :
  private all:string="api/depot/all";
  private update:string="api/depot/update";
  private delete:string="api/depot/delete/";
  private add:string="api/depot/add";
  private find:string = "api/depot/find/"


  // Constructeur :
  constructor(private http:HttpClient) { }


  // Méthodes :
  public getDepots():Observable<Depot[]>
  {
    return this.http.get<Depot[]>(this.all);
  }

  public getDepot(id: number):Observable<Depot>
  {
    console.log(this.find);
    return this.http.get<Depot>(this.find + id);
  }

  public addDepot(depot: DepotAdd):Observable<DepotAdd>
  {
    return this.http.post<Depot>(this.add, depot);
  }

  public updateDepot(client: Depot):Observable<Depot>
  {
    return this.http.put<Depot>(this.update, client);
  }

  public deleteDepot(id: number):Observable<void>
  {
    return this.http.delete<void>( this.delete + id);
  }




}
