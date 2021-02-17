import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman','Thor','Loky'];
  heroeB: string = '';

  
  borrarHeroe(): void{
     // console.log('Borrando');
      //const heroeBorrado = this.heroes.shift()|| '';
      this.heroeB = this.heroes.shift()|| '';
  }
  
}


