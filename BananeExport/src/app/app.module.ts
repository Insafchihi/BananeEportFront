import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DestinataireService} from '../Services/Destinataire.service';
import { AppComponent } from './app.component';
import { DestinataireComponent } from './destinataire/destinataire.component';
import { AppRoutingModule } from './/app-routing.module';
import {HttpModule} from '@angular/http';
import { CommandeComponent } from './commande/commande.component';
import {CommandService} from '../Services/Command.service';
import { ListDestinatairesComponent } from './list-destinataires/list-destinataires.component';
import { ListeCommandesComponent } from './liste-commandes/liste-commandes.component';
@NgModule({

  declarations: [
    AppComponent,
    DestinataireComponent,
    CommandeComponent,
    ListDestinatairesComponent,
    ListeCommandesComponent
  ],
imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  HttpModule

],
  providers: [DestinataireService, CommandService],
  bootstrap: [AppComponent]
})
export class AppModule { }
