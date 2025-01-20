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

  services: any[] = [
    { title: 'Corporate Website', content: "A powerful corporate website that strengthens your brand and drives business growth." },
    { title: 'E-Commerce', content: 'Create a smooth, feature-packed e-commerce platform to make online shopping easy and drive growth.' },
    { title: 'CMS', content: 'Equip your team with an easy-to-use CMS that simplifies managing content and keeps your site scalable.' },
    { title: 'WordPress Website', content: 'Use WordPress to create a secure, SEO-friendly, and flexible website tailored to your business goals.' },
    { title: 'Shopify', content: 'Use WordPress to create a secure, SEO-friendly, and flexible website tailored to your business goals.' },
    { title: 'Custom Web Designing', content: 'Use WordPress to create a secure, SEO-friendly, and flexible website tailored to your business goals.' },
  ];


  tech: any[] = [
    { icons: '1.png', title: 'React', content: "Build dynamic, responsive user interfaces with React, delivering a fast and interactive experience for your users." },
    { icons: '2.png', title: 'Next.js', content: 'Leverage the power of Next.js for server-side rendering and SEO-friendly, high-performance web applications.' },
    { icons: '3.png', title: 'Vue.js', content: 'Create intuitive and scalable front-end applications with Vue.js, known for its flexibility and fast development cycle.' },
    { icons: '4.png', title: 'Angular.js', content: 'Create intuitive and scalable front-end applications with Vue.js, known for its flexibility and fast development cycle.' },
    { icons: '5.png', title: 'Node.js', content: 'Unlock high-performance, real-time applications with Node.js, enabling scalable and efficient server-side solutions.' },
    { icons: '6.png', title: 'PHP', content: 'Utilize PHP for robust and secure server-side development, perfect for building scalable websites and applications.' },
    { icons: '7.png', title: 'MySQL', content: 'Ensure reliable, structured data management with MySQL, ideal for applications requiring high-speed querying and consistency.' },
    { icons: '8.png', title: 'MongoDB', content: 'Handle large-scale, unstructured data efficiently with MongoDB, offering flexible and scalable database solutions for modern applications.' },
    { icons: '9.png', title: 'Wordpress', content: 'Ensure reliable, structured data management with MySQL, ideal for applications requiring high-speed querying and consistency.' },
    { icons: '10.png', title: 'Opencart', content: 'Ensure reliable, structured data management with MySQL, ideal for applications requiring high-speed querying and consistency.' },
    { icons: '11.png', title: 'Shopify', content: 'Ensure reliable, structured data management with MySQL, ideal for applications requiring high-speed querying and consistency.' },
  ];

  faqs: any[] = [
    { question: 'Website Design', answer: "Elevate your online presence with captivating and user-centric website designs tailored to your brand's identity." },
    { question: 'Dynamic Website', answer: 'Bring your website to life with dynamic features and functionalities that engage and captivate your audience.' },
    { question: 'E-commerce Website', answer: 'Unlock new revenue streams with powerful and secure online storefronts tailored to your unique business needs.' },
    { question: 'Admin Dashboard', answer: 'Stay in control of your online operations with intuitive and customizable dashboards, streamlining management tasks with ease.' },
    { question: 'UI/UX Design', answer: 'Delight users with seamless, intuitive interfaces, ultimately elevating usability and leaving a memorable, lasting impression.' },
    { question: 'Social Media Strategy', answer: 'Drive brand awareness and engagement with strategic social media campaigns designed to connect and resonate with your audience.' },
  ];

}