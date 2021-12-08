import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
valid:boolean=false;
  constructor() { }

  contactForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(50), Validators.pattern(/^[a-zA-Z ]+$/)]),
    phone: new FormControl(null, [Validators.required, Validators.pattern(/^(010|011|012|015)[0-9]{8}$/)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    comment: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(200), Validators.pattern(/^[a-zA-Z 0-9]+$/)]),
  })

  submitContactForm(contactForm: FormGroup) {

    if (contactForm.valid) {
     this.valid=true;
     contactForm.reset();
    }
  }

  ngOnInit(): void {
  }

}
