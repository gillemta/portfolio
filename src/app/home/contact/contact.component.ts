import { Component, OnInit } from '@angular/core';
import AOS from 'aos'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init({
      easing: 'ease-back-out',
      duration: 800,
      delay: 0,
      once: false,
      disable: 'mobile'
   });
  }

  scroll() {
    document.getElementById("contact").scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    })
  }

}
