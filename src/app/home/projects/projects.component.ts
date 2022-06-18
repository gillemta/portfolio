import { Component, OnInit } from '@angular/core';
import AOS from 'aos'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

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
    document.getElementById("projects").scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    })
  }

}
