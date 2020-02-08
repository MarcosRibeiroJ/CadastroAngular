import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ClientesComponent } from './clientes/clientes.component';
import { FornecedoresComponent } from './fornecedores/fornecedores.component';
import { ApenasNumeros } from './apenas-numeros';
import { ApenasTextos } from './apenas-texto';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClientesComponent,
    FornecedoresComponent,
    ApenasNumeros,
    ApenasTextos
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
