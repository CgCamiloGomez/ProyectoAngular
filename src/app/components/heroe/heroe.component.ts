import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService, Heroe} from '../../servicios/heroes.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  heroe : Heroe;
  mostrar: boolean = false;

  constructor( private _activatedRoute : ActivatedRoute,
               private _hereoeService : HeroesService,
               private _router: Router    
    ){ 
    //De esta manera con ActivatedRoute obtengo el parametro enviado por a url 
    this._activatedRoute.params.subscribe(params =>{ 
      this.heroe = this._hereoeService.getHeroe(params['id']);
      if (params.casa === 'DC'){
        this.mostrar=true;
      }
    })
  }

  ngOnInit(): void {
  }

  regresar(){
    this._router.navigate(['/heroes']);
  }

}
