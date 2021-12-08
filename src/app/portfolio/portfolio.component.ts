import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  imgSrc: string = "";
  imgName: string = "";
  popup: any;
  body: any;
  fadeIn:any;

  constructor() {
  }

  escapeSlide() {
    document.addEventListener("keydown", function (e) {
      if (e.key == "Escape") {
        let popup: any = document.querySelector(".popup");
        let body: any = document.querySelector("body");
        popup.classList.add("d-none");
        body.classList.remove("overflow-hidden");
      }
    })
  }

  closePopup(e: any) {
    let popupContainer: any = document.querySelector(".popupContainer");
    this.popup = document.querySelector(".popup");
    if (e.target == this.popup) {
      this.closeSlide();
    }
  }

  displayPopup(e: any) {
    if (e.target.innerHTML != ``) {
      this.popup = document.querySelector(".popup");
      this.body = document.querySelector("body");
      this.imgSrc = e.target.nextSibling.getAttribute("src");
      this.imgName = e.target.nextSibling.getAttribute("alt");
      this.popup.classList.remove("d-none");
      this.body.classList.add("overflow-hidden");
    }

  }

  getSrc(e: any) {
    this.popup = document.querySelector(".popup");
    this.body = document.querySelector("body");
    this.imgSrc = e.target.parentNode.nextSibling.getAttribute("src")
    this.imgName = e.target.parentNode.nextSibling.getAttribute("alt");
    this.popup.classList.remove("d-none");
    this.body.classList.add("overflow-hidden");
  }

  closeSlide() {
    this.popup = document.querySelector(".popup");
    this.body = document.querySelector("body");
    this.popup.classList.add("d-none");
    this.body.classList.remove("overflow-hidden");
  }

  ngOnInit(): void {
    this.escapeSlide();
  }

}
