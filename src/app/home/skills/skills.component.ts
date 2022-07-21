import { Component, OnInit } from '@angular/core';
import AOS from "aos";


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})

export class SkillsComponent implements OnInit {

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
    const yOffset = -160
    const element = document.getElementById("skills");
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({top: y, behavior: 'smooth'})
  }

}
