
import { Injectable } from '@angular/core';
import {Destinataire} from '../classes/Destinataire' ;
import {map} from 'rxjs/operators';
import {HttpEvent, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Http, RequestOptions, ResponseContentType} from '@angular/http';
import 'rxjs/add/operator/map';
import {TeardownLogic} from 'rxjs/Subscription';

@Injectable()
export class DestinataireService {
  constructor(private http: Http) {
  }

  save(destinataire: Destinataire) {

    return this.http.post('http://localhost:8080/service/ajoutDestinataire', destinataire);

  }
  getListDestinataires(): Observable<any> {
    return this.http.get('http://localhost:8080/service/getDestinataires/' );

  }
  getListCommandes(id: number): Observable<any>  {

    return this.http.get('http://localhost:8080/service/listeCommandes/' + id  );
  }
}
