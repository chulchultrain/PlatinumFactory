import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntryFilterDisplayComponent } from './entry-filter-display/entry-filter-display.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path : 'entry-filter', component: EntryFilterDisplayComponent} , 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
