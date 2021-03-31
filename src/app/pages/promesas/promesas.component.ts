import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {
  usuarios:any;
  constructor() { }

  ngOnInit(): void {
    
    this.obtenerUsuarios().then(datosUsuarios=>{
      this.usuarios=datosUsuarios;
      console.log(this.usuarios);
    });
  }
  obtenerUsuarios(){
    const promesa = new Promise((resolve)=>{
      fetch("https://nestjs-app.herokuapp.com/usuarios")
      .then(res => res.json())
      .then(res => resolve(res))
    });
      return promesa;
    }
}
