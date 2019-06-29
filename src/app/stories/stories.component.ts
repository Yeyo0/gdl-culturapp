import { Component, OnInit } from '@angular/core';
import { Story } from '../shared/story';
import { StoryService } from '../shared/story.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {

  storiesList: Story[]; 

  constructor(
    private serviceStory: StoryService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getStoriesList();
  }

  getStoriesList(): void {
    this.serviceStory.getStoriesList()
                        .subscribe(
                          rs => this.storiesList = rs,
                          er => console.log(er),
                          () => {
                          }
                        )
  }

  goStory(storyId){
    let link = ['/story', storyId];
    this.router.navigate(link);
  }

}
