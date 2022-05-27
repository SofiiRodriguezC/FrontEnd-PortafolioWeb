import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BnavComponent } from '../bnav/bnav.component';
import { InicioComponent } from '../inicio/inicio.component';
import { SobremiComponent } from '../sobremi/sobremi.component';
import { ContactoComponent } from '../contacto/contacto.component';
const routes: Routes = [
  {path: 'Inicio', component: InicioComponent },
  { path: 'Sobre Mi', component: SobremiComponent},
  {path: 'Contacto', component: ContactoComponent},
  {path: 'BnavComponent', component: BnavComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
