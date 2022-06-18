import { Component, OnInit } from '@angular/core';
import AOS from 'aos'

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

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
    document.getElementById("work").scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    })
  }

}
