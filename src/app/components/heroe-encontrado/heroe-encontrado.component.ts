import { Heroe, HeroesService } from './../../servicios/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-heroe-encontrado',
  templateUrl: './heroe-encontrado.component.html',
  styleUrls: ['./heroe-encontrado.component.css']
})
export class HeroeEncontradoComponent implements OnInit {

  heroesEncontrados: Heroe[];
  termino : string;

  constructor(public activatedRoute : ActivatedRoute,
              public heroesService:HeroesService,
              public router : Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(parametro =>{
       this.termino = parametro['nombre'];
      this.heroesEncontrados = this.heroesService.buscarHeroe(parametro['nombre']);
      console.log (this.heroesEncontrados);
    })
  }

  getHeroe(herore){
    this.router.navigate(['/heroe',herore.id,herore.casa]);
  }

}
