import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimateInModule } from 'ngx-animate-in';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { BioComponent } from './home/bio/bio.component';
import { WorkComponent } from './home/work/work.component';
import { SkillsComponent } from './home/skills/skills.component';
import { ProjectsComponent } from './home/projects/projects.component';
import { ContactComponent } from './home/contact/contact.component';
import { CoverComponent } from './home/cover/cover.component';
import { FooterComponent } from './home/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    BioComponent,
    WorkComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    CoverComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AnimateInModule
  ],
  providers: [BioComponent,WorkComponent,SkillsComponent,ProjectsComponent,ContactComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
