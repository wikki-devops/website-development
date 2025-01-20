import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  emailContact: string = 'sales@godparticles.in';
  title = 'Social Media Marketing';
  constructor(private renderer: Renderer2) { }

  ngAfterViewInit() {
    const script = this.renderer.createElement('script');
    script.type = 'text/javascript';
    script.src = 'assets/js/jquery.js';
    script.src = 'assets/js/vendors.min.js';
    script.src = 'assets/js/main.js';

    this.renderer.appendChild(document.body, script);

  }

  faqs: any[] = [
    { question: 'Website Design', answer: "Elevate your online presence with captivating and user-centric website designs tailored to your brand's identity." },
    { question: 'Dynamic Website', answer: 'Bring your website to life with dynamic features and functionalities that engage and captivate your audience.' },
    { question: 'E-commerce Website', answer: 'Unlock new revenue streams with powerful and secure online storefronts tailored to your unique business needs.' },
    { question: 'Admin Dashboard', answer: 'Stay in control of your online operations with intuitive and customizable dashboards, streamlining management tasks with ease.' },
    { question: 'UI/UX Design', answer: 'Delight users with seamless, intuitive interfaces, ultimately elevating usability and leaving a memorable, lasting impression.' },
    { question: 'Social Media Strategy', answer: 'Drive brand awareness and engagement with strategic social media campaigns designed to connect and resonate with your audience.' },
  ];

  services: any[] = [
    { title: 'Website Design', content: "Elevate your online presence with captivating and user-centric website designs tailored to your brand's identity." },
    { title: 'Dynamic Website', content: 'Bring your website to life with dynamic features and functionalities that engage and captivate your audience.' },
    { title: 'E-commerce Website', content: 'Unlock new revenue streams with powerful and secure online storefronts tailored to your unique business needs.' },
    { title: 'Admin Dashboard', content: 'Stay in control of your online operations with intuitive and customizable dashboards, streamlining management tasks with ease.' },
    { title: 'UI/UX Design', content: 'Delight users with seamless, intuitive interfaces, ultimately elevating usability and leaving a memorable, lasting impression.' },
    { title: 'Social Media Strategy', content: 'Drive brand awareness and engagement with strategic social media campaigns designed to connect and resonate with your audience.' },
  ];

}