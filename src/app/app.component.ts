import { Component } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger("routeAnimation", [
      transition("*<=>*",[
        style({opacity:0}),
        animate("500ms",style({opacity:1}))
    ])
    ])
  ]
})
export class AppComponent {
  title = 'Angular-Project';
}
