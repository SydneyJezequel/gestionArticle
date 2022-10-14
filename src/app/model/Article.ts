import {Depot} from "./Depot";

export class Article {
  id!:number;
  dateEntre!:Date;
  designation!:String;
  prix!:number;
  quantite!:number;
  depot!:Depot;


  constructor(id: number, dateEntre: Date, designation: String, prix: number, quantite: number, depot: Depot) {
    this.id = id;
    this.dateEntre = dateEntre;
    this.designation = designation;
    this.prix = prix;
    this.quantite = quantite;
    this.depot = depot;
  }
}
