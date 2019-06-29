import { Component, OnInit } from '@angular/core';
import { Story } from '../shared/story';
import { StoryService } from '../shared/story.services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  private story: Story;
  public text: any;
  private textArray: any[];
  private nameStory: string;
  private storyId: string; 

  constructor(
    private activatedRoute: ActivatedRoute,
    private serviceStory: StoryService,
  ) { }

  ngOnInit() {
    
    this.storyId = this.activatedRoute.snapshot.params.id;
    this.getStory(this.storyId);
    this.getStoryName();
  }

  getStory(storyId) {
    this.serviceStory.getStory(storyId)
    .subscribe(
      rs => this.text = rs,
      er => this.text = null,
      () => {
        this.readTxt(this.text);
      }
    )
  }

  getStoryName() {
    let storiesList: Story[];
    this.serviceStory.getStoriesList()
    .subscribe(
      rs => storiesList = rs,
      er => console.log(er),
      () => {
        let list: Story[];
        list = storiesList.filter((list) => (list.story === parseInt(this.storyId))) ;
        this.nameStory = list[0].name;
      }
    )
  }

  readTxt(textFile) {
    this.textArray = textFile.split('\n');
  }

  isLink(line: string): boolean {
    let result: boolean = false; 
    result = line.indexOf('http') > -1;
    return result;
  }
}
