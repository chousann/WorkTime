import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocalstorageService } from './service/localstorage.service';
import { DakaComponent } from './daka/daka.component';
import { DetailComponent } from './detail/detail.component';
import { FormsModule } from '@angular/forms';
import { SampleComponent } from './sample/sample.component';
import { MatNativeDateModule } from '@angular/material/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
const appRoutes: Routes = [
  {
    path: '', component: SampleComponent
  },
  {
    path: 'daka', component: DakaComponent
  },
  {
    path: 'detail', component: DetailComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    DakaComponent,
    DetailComponent,
    SampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
  ],
  providers: [LocalstorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
