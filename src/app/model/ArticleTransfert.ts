import {Depot} from "./Depot";

export class ArticleTransfert {
  designation!:String;
  dateEntre!:String;
  prix!:number;
  quantite!:number;
  depot!:String;


  constructor(designation: String, dateEntre: String, prix: number, quantite: number, depot: String) {
    this.designation = designation;
    this.dateEntre = dateEntre;
    this.prix = prix;
    this.quantite = quantite;
    this.depot = depot;
  }


}
