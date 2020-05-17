import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntryFilterDisplayComponent } from './entry-filter-display/entry-filter-display.component';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [
  { path : 'entry-filter', component: EntryFilterDisplayComponent} , 
  { path : '', component : HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
