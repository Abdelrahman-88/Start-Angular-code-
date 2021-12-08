import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  constructor() { }

  loading() {
    window.onload = function () {
      let container: any = document.querySelector("#container");
      let body: any = document.querySelector("body");
      console.log(container)
      container.classList.add("d-none");
      body.style.overflowY = "auto"
    }
    return true
  }

  ngOnInit(): void {
  }

}
