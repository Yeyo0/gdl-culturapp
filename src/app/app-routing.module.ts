import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { StoriesComponent } from './stories/stories.component';
import { StoryComponent } from './story/story.component';
import { HistoryComponent } from './history/history.component';
import { GdlComponent } from './gdl/gdl.component';

const routes: Routes = [
  //{ path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'stories', component: StoriesComponent },
  { path: 'story/:id', component: StoryComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'gdl', component: GdlComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
