import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scroll() {
    document.getElementById("skills").scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    })
  }

}
