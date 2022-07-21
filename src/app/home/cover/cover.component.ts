import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss']
})
export class CoverComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
      const link = document.createElement('a');
      link.setAttribute('type', 'hidden');
      link.href = '../../../assets/resume.pdf';
      link.download = 'resume.pdf';
      link.click();
      link.remove();
  }
}
