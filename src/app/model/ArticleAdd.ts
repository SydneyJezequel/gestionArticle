import {Depot} from "./Depot";

export class ArticleAdd {
  designation!:String;
  dateEntre!:Date;
  prix!:number;
  quantite!:number;
  depot!:Depot;


  constructor(designation: String, dateEntre: Date, prix: number, quantite: number, depot: Depot) {
    this.designation = designation;
    this.dateEntre = dateEntre;
    this.prix = prix;
    this.quantite = quantite;
    this.depot = depot;
  }
}
