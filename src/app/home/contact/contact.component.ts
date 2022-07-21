import { Component, OnInit } from '@angular/core';
import AOS from 'aos'
import { ContactService } from 'src/app/services/contact.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  
  contact = {
    first: "",
    last: "",
    email: "",
    message: ""
  }

  constructor(private contactService: ContactService) { }

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
    console.log(contact)
    this.contactService.submitContact(contact).subscribe()
  }

}
