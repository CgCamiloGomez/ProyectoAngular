import {RouterModule, Routes} from '@angular/router' 
import {HomeComponent} from './components/home/home.component'
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent} from './components/heroes/heroes.component';
import {HeroeComponent} from './components/heroe/heroe.component';

//Se crea una constante la cual contiene una arreglo de objetos 
const APP_ROUTES: Routes = [
    {path:'home', component: HomeComponent }, //se indica el nombre que aparecera en la url y al componente que hace referencia
    {path:'about', component: AboutComponent },
    {path:'heroes', component: HeroesComponent },
    {path:'heroe/:id/:casa', component:HeroeComponent},// De esta manera indico que la url debe ir con un parametro
    {path:'**', pathMatch: 'full', redirectTo: 'home'},
]

//Se puede trabajar de esta manera para la url relativa, pero se puede presentar errores de referencia cuando se envían parametros
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

//O se puede trabajar de esta manera para poder enviar parametros
// export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES,{useHash:true});
