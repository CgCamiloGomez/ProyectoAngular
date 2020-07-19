import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from 'src/app/servicios/heroes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[];

  constructor(private _heroesService: HeroesService,
              private _router: Router 
    ) { }

  ngOnInit(): void {
    this.heroes =  this._heroesService.getHeroes();
    console.log (this.heroes);
  }

  getHeroe(index,casa){
    //En esta linea le indico a la ruta que hay que ir cuando le de click en el boton
    this._router.navigate(['/heroe',index,casa]);
  }

}
