import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroeService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

    hero: any = {};
    constructor(
        private _activateRouter: ActivatedRoute,
        private _heroeService: HeroeService
    ) {
        this._activateRouter.params.subscribe(params => {
            this.hero = this._heroeService.getHero(params['id']);
        });
    }

    ngOnInit() {
    }

}
