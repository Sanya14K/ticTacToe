import { EnvironmentProviders, importProvidersFrom, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SquareComponent } from './square/square.component';
import { BoardComponent } from './board/board.component';

import { provideRouter } from '@angular/router'
import { NbEvaIconsModule } from '@nebular/eva-icons'
import { NbThemeModule } from '@nebular/theme'

const provideNebular = (): EnvironmentProviders[] => [
  importProvidersFrom(NbThemeModule.forRoot({ name: 'cosmic' })),
  importProvidersFrom(NbEvaIconsModule)
]

@NgModule({
  declarations: [
    AppComponent,
    SquareComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    ...provideNebular()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
