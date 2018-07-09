import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { EmployeelistComponent } from './components/employeelist/employeelist.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule, MatSortModule} from '@angular/material';
import { FilterPipe} from './components/pipes/search.pipe';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { DailyscrumComponent } from './components/dailyscrum/dailyscrum.component';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  { path: 'listaradnika', component: EmployeelistComponent },
  { path: 'dailyscrum',      component: DailyscrumComponent },
  ];

@NgModule({
  declarations: [
    AppComponent,
    EmployeelistComponent,
    FilterPipe,
    DailyscrumComponent,
  ],
  exports:[
    MatButtonToggleModule,
    MatTableModule,

  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
FormsModule,
    CommonModule,
    BrowserModule,
    MatTableModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatSortModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
