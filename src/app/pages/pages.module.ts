import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DeshboardComponent } from './deshboard/deshboard.component';
import { HomeComponent } from './home/home.component';
import { NotfountComponent } from './notfount/notfount.component';
import { PromesasComponent } from './promesas/promesas.component';
import { ObservableComponent } from './observable/observable.component';




@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    DeshboardComponent,
    HomeComponent,
    NotfountComponent,
    PromesasComponent,
    ObservableComponent
  ],
  exports:[
    AboutComponent,
    ContactComponent,
    DeshboardComponent,
    HomeComponent,
    NotfountComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
