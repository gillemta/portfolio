import { Component, OnInit } from '@angular/core';
import { BioComponent } from '../bio/bio.component';
import { ContactComponent } from '../contact/contact.component';
import { ProjectsComponent } from '../projects/projects.component';
import { SkillsComponent } from '../skills/skills.component';
import { WorkComponent } from '../work/work.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private bio: BioComponent,
    private work: WorkComponent,
    private skills: SkillsComponent,
    private projects: ProjectsComponent,
    private contact: ContactComponent
    ) { }

  ngOnInit(): void {
  }

  scrollBio() {
    this.bio.scroll();
  }

  scrollWork() {
    this.work.scroll();
  }

  scrollSkills() {
    this.skills.scroll();
  }

  scrollProjects() {
    this.projects.scroll();
  }

  scrollContact() {
    this.contact.scroll();
  }

}
