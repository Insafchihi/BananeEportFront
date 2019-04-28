import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {DestinataireComponent} from './destinataire/destinataire.component';
import {CommandeComponent} from './commande/commande.component';
import {ListDestinatairesComponent} from './list-destinataires/list-destinataires.component';
import {ListeCommandesComponent} from './liste-commandes/liste-commandes.component';
const appRoutes: Routes = [
  { path: 'addDest', component: DestinataireComponent },
  { path: 'addcommande', component: CommandeComponent },
  { path: 'listDestinataire', component: ListDestinatairesComponent },
  { path: 'ListeCommandes/:id', component: ListeCommandesComponent }

];

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
