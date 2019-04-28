import { Component, OnInit } from '@angular/core';
import {Commande} from '../../classes/commande';
import {DestinataireService} from '../../Services/Destinataire.service';
import {CommandService} from '../../Services/Command.service';
import {Destinataire} from '../../classes/Destinataire';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {

   commande: Commande;
   message: string;
   messagedate: string;
   verifquantite: boolean;
   verifdate: boolean;
   diffc: number;
   days: number;
   date: Date;
  public destinataires: Array<Destinataire>;

  constructor(private  destinataireService: DestinataireService , private commandeService: CommandService  ) {
    this.commande = new Commande();
    this.verifquantite = false;
    this.verifdate = false;
  }

  ngOnInit() {
    this.destinataireService.getListDestinataires().subscribe((data) => {
      console.log(data);
      this.destinataires = this.destinataires = JSON.parse(data['_body']) ;

    });
  }
  onSubmit() {
    console.log(this.commande.dateLivraison);
    if (this.verifquantite === false) {
      this.message = 'la quantite doit etre comprise entre 0 et  10000 et multiple de 25';
    }
    if (this.verifdate === false) {
      this.messagedate = 'date doit etre supérieur  du date du jour de 7 jours' ;
    }

    if (this.verifdate === true && this.verifquantite === true ) {
      console.log(this.commande);
      this.commandeService.save(this.commande).subscribe((data) => {
        console.log(data);

      });
    }
  }
  OndistinataireSelect() {

  }
  update(value: number) {
    console.log('je suis entré');

    if ((value % 25) !== 0 || value < 0 || value > 10000) {
      this.verifquantite = false ;
      console.log('je suis là');
    } else {
      this.verifquantite = true ;
    }
    console.log(this.verifquantite);
    this.commande.prix = this.commande.quantite * 2.5;
  }
  verifier (value: Date) {
    this.date = new Date(value);
   console.log(this.date);
   this.diffc = new Date().getTime() - this.date.getTime();
   console.log(this.diffc);
    this.days = Math.round(Math.abs(this.diffc / (1000 * 60 * 60 * 24)));
    console.log(this.days);

    if (this.days < 7 ) {
      this.verifdate = false;
    } else {
      this.verifdate = true;
    }

  }
}
