import { Heroe, HeroesService } from './../../servicios/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-heroe-encontrado',
  templateUrl: './heroe-encontrado.component.html',
  styleUrls: ['./heroe-encontrado.component.css']
})
export class HeroeEncontradoComponent implements OnInit {

  heroeEncontrado: Heroe[];
  termino : string;

  constructor(public activatedRoute : ActivatedRoute,
              public heroesService:HeroesService,
              public router : Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(parametro =>{
       this.termino = parametro['nombre'];
      this.heroeEncontrado = this.heroesService.buscarHeroe(parametro['nombre']);
      console.log (this.heroeEncontrado);
    })
  }

  getHeroe(id,casa){
    this.router.navigate(['/heroe',id,casa]);
  }

}
