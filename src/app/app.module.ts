import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routing';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { MatPaginatorModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatCardModule, MatSortModule } from '@angular/material';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTableModule,
    MatDialogModule,
    MatIconModule,
    FormsModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatCardModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  declarations: [
    AppComponent,
    MovieComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
