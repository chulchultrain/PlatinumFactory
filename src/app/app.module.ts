import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { EntryFilterDisplayComponent } from './entry-filter-display/entry-filter-display.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { ResultDisplayComponent } from './result-display/result-display.component';
import { EntryDisplayComponent } from './entry-display/entry-display.component';
import { MatTableModule } from '@angular/material/table';
import { SavedDisplayComponent } from './saved-display/saved-display.component';
import { EntryFilterFormComponent } from './entry-filter-form/entry-filter-form.component';
import { MatTabsModule } from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HomePageComponent } from './home-page/home-page.component';

// import { NameService } from './name-service/name-service.service';

@NgModule({
  declarations: [
    AppComponent,
    EntryFilterDisplayComponent,
    ResultDisplayComponent,
    EntryDisplayComponent,
    SavedDisplayComponent,
    EntryFilterFormComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatInputModule,
    MatListModule,
    MatExpansionModule,
    MatTableModule,
    MatTabsModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
