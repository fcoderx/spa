import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroeService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar-heroes',
  templateUrl: './buscar-heroes.component.html'
})
export class BuscarHeroesComponent implements OnInit {

    heroes: any[] = [];
    termino: string;
    constructor(
        private _activatedRouter: ActivatedRoute,
        private _heroeService: HeroeService,
        private _router: Router
    ) { }

    ngOnInit() {
        this._activatedRouter.params.subscribe(params => {
            this.termino = params['termino'];
            this.heroes = this._heroeService.buscarHeroes(this.termino);
            console.log(this.heroes);
        });
    }

    verHeroe(id: number) {
        this._router.navigate(['/heroe', id]);
    }

}
