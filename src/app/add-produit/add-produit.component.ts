import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from '../model/categorie.model';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {
  newProduit = new Produit();
  categories! : Categorie[];
  newIdCat! : number;
  newCategorie! : Categorie;
  constructor(private produitService: ProduitService,private router :Router) { }
  ngOnInit() {
    this.categories = this.produitService.listeCategories();
    }
    addProduit() {
    this.newCategorie =
    this.produitService.consulterCategorie(this.newIdCat);
    this.newProduit.categorie = this.newCategorie;
    this.produitService.ajouterProduit(this.newProduit);
    this.router.navigate(['produits']);
    }

}
