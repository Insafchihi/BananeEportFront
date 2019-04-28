import { Component, OnInit } from '@angular/core';
import {Destinataire} from '../../classes/Destinataire';
import { DestinataireService} from '../../Services/Destinataire.service';
@Component({
  selector: 'app-destinataire',
  templateUrl: './destinataire.component.html',
  styleUrls: ['./destinataire.component.css']
})
export class DestinataireComponent implements OnInit {

   destinataire: Destinataire;
   destinataires: Array<Destinataire>;

  constructor(private  destinataireService: DestinataireService ) {
    this.destinataire = new Destinataire();
  }

  ngOnInit() {
    this.destinataireService.getListDestinataires().subscribe((data) => {
      console.log(data);
     // this.destinataires = JSON.parse(data['_body']) ;
    });
  }

  onSubmit() {
    this.destinataireService.save(this.destinataire).subscribe((data) => {
      console.log(data);

    });

  }

}
