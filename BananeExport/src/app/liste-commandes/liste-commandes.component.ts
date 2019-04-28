import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { DestinataireService} from '../../Services/Destinataire.service';
import {Commande} from '../../classes/commande';
@Component({
  selector: 'app-liste-commandes',
  templateUrl: './liste-commandes.component.html',
  styleUrls: ['./liste-commandes.component.css']
})
export class ListeCommandesComponent implements OnInit {
id: number;
commandes: Commande[];
  constructor( private  _router: Router, private route: ActivatedRoute  , private destiataireService: DestinataireService) { }

  ngOnInit() {
    const allParams = this.route.snapshot.params ;
    this.id  = allParams.id ;
    console.log('id' + this.id);
    this.destiataireService.getListCommandes(this.id).subscribe((data) => {
      console.log(data);
      this.commandes = JSON.parse(data['_body']) ;


    });

  }

}
