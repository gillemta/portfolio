import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scroll() {
    document.getElementById("work").scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    })
  }

}
