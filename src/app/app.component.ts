import { Component } from '@angular/core';
import { RootObject } from './models/root-object';
import { DevFinderService } from './services/dev-finder.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Devfinder';
  public dev:RootObject = {} as RootObject;
  constructor(public devService:DevFinderService){
    if(this.devService.user == "discord") {
      devService.changeUrl(this.devService.user).subscribe(data => {
        this.dev = data;
       });
    }
  }
public searchUser() {
  this.devService.changeUrl(this.devService.user).subscribe(data => {
    this.dev = data;
  });
  this.devService.user = "";
}
}
