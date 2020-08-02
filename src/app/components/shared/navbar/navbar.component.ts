import { HeroesService, Heroe } from './../../../servicios/heroes.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  heroeEncontrado: Heroe[];
  constructor(public heroservice: HeroesService,
              public router : Router) { }

  ngOnInit(): void {

  }

  buscarHereo(value:string){
    console.log(value);
    this.router.navigate(['/resultadoheroe',value]);
    //Linea que permite abrir ventana emergente
    //window.open("http://www.desarrolloweb.com" , "ventana1" , "width=120,height=300,scrollbars=NO")
  }
}
