import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HeroesService, Heroe } from 'src/app/servicios/heroes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroe-targeta',
  templateUrl: './heroe-targeta.component.html'
})
export class HeroeTargetaComponent implements OnInit {

  @Input() heroe: Heroe;
  @Output() heroeSelecionado : EventEmitter<Heroe>
  constructor(public heroeService: HeroesService,
              public router: Router) { this.heroeSelecionado = new EventEmitter; }

  ngOnInit(): void {
  }

  getHeroe(heroe){
    //En esta linea le indico a la ruta que hay que ir cuando le de click en el boton
    //this.router.navigate(['/heroe',id,casa]);
    this.heroeSelecionado.emit(heroe);
  }

}
