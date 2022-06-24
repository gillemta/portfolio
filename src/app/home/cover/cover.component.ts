import { Component, OnInit } from '@angular/core';
import { DownloadService } from 'src/app/services/download.service';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss']
})
export class CoverComponent implements OnInit {

  constructor(private downloadService: DownloadService) { }

  ngOnInit(): void {
  }

  onClick() {
    this.downloadService.getFile().subscribe( blob => {
      const a = document.createElement('a')
      const objectURL = URL.createObjectURL(blob)
      a.href = objectURL
      a.download = 'resume.pdf'
      a.click()
      URL.revokeObjectURL(objectURL)
    })
  }
}
