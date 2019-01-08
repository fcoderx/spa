import { Component, OnInit } from '@angular/core';
import { HeroeService, Heroes } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
    heroes: Heroes[] = [];

      constructor(
          private _heroeService: HeroeService,
          private _route: Router
      ) { }

      ngOnInit() {
          this.heroes = this._heroeService.getHeroes();
        //   console.log(this.heroes);
      }

      verHeroe(id: number) {
          this._route.navigate(['/heroe', id]);
      }
}
