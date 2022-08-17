import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import AOS from 'aos'
import { MatSnackBar } from '@angular/material';
import { ContactService } from 'src/app/services/contact.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContactComponent implements OnInit {
  status: number = 0;
  
  contact = {
    first: "",
    last: "",
    email: "",
    message: ""
  }

  constructor(private contactService: ContactService, private snackBar: MatSnackBar) { }

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
    const element = document.getElementById("contact");
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({top: y, behavior: 'smooth'})
  }

  onSubmit(contact) {
    this.contactService.submitContact(contact).subscribe(response => {
      this.status = response.status;

      if (this.status === 200) {
        this.snackBar.open("Message was successfully sent!", "", {
          duration: 4000,
          panelClass: ['snack-bar-success']
        })
      }
    })
    
     if (this.status === 0) {
      this.snackBar.open("Message could not be sent (Server is down)", "", {
        duration: 4000,
        panelClass: ['snack-bar-failure']
      })
        
    }
    this.status = 0;
  }

}
