import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = {
    title: "<h1>my angular course</h1>",
    msgInput: "Lore Ipsum"
  };

  onLogoClicked () {
    alert('Hello world!');
  }

  onKeyUp(newTitle: string) {
    this.data.title = newTitle;
  }
}
