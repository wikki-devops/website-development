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
    { icons: '1.png', title: 'React', content: "Create seamless UX with a component-based architecture." },
    { icons: '12.png', title: 'HTML5', content: "Create seamless UX with a component-based architecture." },
    { icons: '2.png', title: 'Vue.js', content: 'Effortlessly accelerate development and offer versatility and simplicity.' },
    { icons: '3.png', title: 'Next.js', content: 'Deliver fast, optimized web apps with server-side rendering.' },
    { icons: '4.png', title: 'Angular.js', content: 'Harness it to develop structured, modular, and interactive applications.' },
    { icons: '5.png', title: 'Node.js', content: 'Power real-time, event-driven applications with a non-blocking model.' },
    { icons: '6.png', title: 'PHP', content: 'Build secure, adaptable web solutions with time-tested versatility.' },
    { icons: '7.png', title: 'MySQL', content: 'Achieve consistent performance with a reliable relational database system.' },
    { icons: '8.png', title: 'MongoDB', content: 'Manage flexible, large-scale data structures with NoSQL capabilities.' },
    { icons: '9.png', title: 'Wordpress', content: 'Design customizable websites effortlessly with an extensive ecosystem.' },
    { icons: '10.png', title: 'Shopify', content: 'Launch scalable e-commerce platforms using feature-packed tools.' },
    { icons: '11.png', title: 'Opencart', content: 'Streamline online store creation with user-friendly functionalities.' },
  ];

  // Adjust the logic based on the number of columns per row
  columnsPerRow = 6;

  isSecondRow(index: number): boolean {
    return Math.floor(index / this.columnsPerRow) === 1; // Second row
  }

  isLastChild(index: number): boolean {
    return (index + 1) % this.columnsPerRow === 0; // Last column in the row
  }


  clients: number[] = Array.from({ length: 13 }, (_, i) => i + 1);

  faqs: any[] = [
    { question: 'Can you build a website for me from scratch?', answer: "Absolutely! We'll take care of everything from start to finish, turning your ideas into a fully functional website." },
    { question: 'How will the design for my website?', answer: 'We’ll collaborate with you to create a custom, user-friendly design that reflects your brand and meets your goals.' },
    { question: 'Will my website use advanced, future-proof technologies?', answer: 'Yes! We use the latest technologies to ensure your site is modern, fast, and future-proof.' },
    { question: 'Do you offer SEO services?', answer: 'We provide a basic SEO setup for your website. For comprehensive SEO services, feel free to contact us!' },
    { question: 'Will my site be mobile-friendly?', answer: 'Definitely! Our websites are designed to be mobile-friendly, ensuring they look great and work perfectly on any device.' },
    { question: 'Do you offer maintenance and support?', answer: 'We provide maintenance and support for the initial 2 months. After that, you can avail of our maintenance service separately for continued support.' },
    { question: 'Do you provide E-commerce websites?', answer: 'Absolutely! We specialize in building seamless, secure e-commerce sites with integrated payment gateways and shipping partner solutions to enhance the shopping experience.' },
  ];
}