import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserDirectoryComponent } from './user-directory/user-directory.component';
import { SavedataService } from './services/savedata.service';

const appRoutes = [
  { path: '', component: HomePageComponent },
  { path: 'user', component: UserDirectoryComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    UserDirectoryComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SavedataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
