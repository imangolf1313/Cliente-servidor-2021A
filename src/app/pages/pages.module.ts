import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DeshboardComponent } from './deshboard/deshboard.component';
import { HomeComponent } from './home/home.component';
import { NotfountComponent } from './notfount/notfount.component';




@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    DeshboardComponent,
    HomeComponent,
    NotfountComponent
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
