import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MyMaterialModule } from './material/material.module';

import { HomeComponent } from './home/home.component';
import { StoriesComponent } from './stories/stories.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { StoryService } from './shared/story.services';
import { StoryComponent } from './story/story.component';
import { HistoryComponent } from './history/history.component';
import { GdlComponent } from './gdl/gdl.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StoriesComponent,
    StoryComponent,
    HistoryComponent,
    GdlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MyMaterialModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [StoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
