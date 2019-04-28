
import { Injectable } from '@angular/core';
import {Destinataire} from '../classes/Destinataire' ;
import {map} from 'rxjs/operators';
import {HttpEvent, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Http, RequestOptions, ResponseContentType} from '@angular/http';
import 'rxjs/add/operator/map';
import {TeardownLogic} from 'rxjs/Subscription';
import {Commande} from '../classes/commande';

@Injectable()
export class CommandService {
  constructor(private http: Http) {
  }

  save(commande: Commande) {

    return this.http.post('http://localhost:8080/serviceCommande/ajoutCommande', commande);

  }
  getListDestinataires() {
    return this.http.get('http://localhost:8080/service/getDestinataires/' );

  }
}
