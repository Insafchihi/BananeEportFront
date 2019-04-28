import { Component, OnInit } from '@angular/core';
import {DestinataireService} from '../../Services/Destinataire.service';
import {Destinataire} from '../../classes/Destinataire';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-list-destinataires',
  templateUrl: './list-destinataires.component.html',
  styleUrls: ['./list-destinataires.component.css']
})
export class ListDestinatairesComponent implements OnInit {
 destinataires: Destinataire[];
 id: number;
  constructor(private  destinataireService: DestinataireService, private  _router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.destinataireService.getListDestinataires().subscribe((data) => {
      console.log(data);
      this.destinataires = this.destinataires = JSON.parse(data['_body']) ;

    });
  }
  OnClick(id: number) {
console.log(id);

    this._router.navigate(['/ListeCommandes/' + id]);
  }
}
