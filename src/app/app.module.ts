import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ClybComponent } from './clyb/clyb.component';
import { SxemComponent } from './sxem/sxem.component';
import { SkipassComponent } from './skipass/skipass.component';
import { InstComponent } from './inst/inst.component';
import { from } from 'rxjs';
import { OclibComponent } from './oclib/oclib.component';
import { GrafComponent } from './graf/graf.component';
import { ProcatComponent } from './procat/procat.component';
import { InstfotoComponent } from './instfoto/instfoto.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SkiserComponent } from './skiser/skiser.component';
import { ForoComponent } from './foro/foro.component';
import { LoalComponent } from './loal/loal.component';
import { ScrollToModule } from 'ng2-scroll-to';
import { MagazComponent } from './magaz/magaz.component';


const AppRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'clyb', component: ClybComponent},
  {path: 'sxem', component: SxemComponent},
  {path: 'skipass', component: SkipassComponent},
  {path: 'inst', component: InstComponent},
  {path: 'cl', component: OclibComponent},
  {path: 'gr', component: GrafComponent},
  {path: 'pr', component: ProcatComponent},
  {path: 'ze', component: InstfotoComponent},
  {path: 'sr', component: SkiserComponent},
  {path: 'ft', component: ForoComponent},
  {path: 'lg', component: LoalComponent},
  {path: 'mz', component: MagazComponent},
  {path: '**', component: NotFoundComponent},

]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClybComponent,
    SxemComponent,
    SkipassComponent,
    InstComponent,
    OclibComponent,
    GrafComponent,
    ProcatComponent,
    InstfotoComponent,
    NotFoundComponent,
    SkiserComponent,
    ForoComponent,
    LoalComponent,
    MagazComponent,
  ],


  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(AppRoutes ),
    ScrollToModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
