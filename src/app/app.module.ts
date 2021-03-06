import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { ROUTING } from './app.routes';

// Servicios
import { HeroeService } from './services/heroes.service';

// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscarHeroesComponent } from './components/buscar-heroes/buscar-heroes.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    BuscarHeroesComponent
  ],
  imports: [
    BrowserModule,
    ROUTING
  ],
  providers: [
      HeroeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
