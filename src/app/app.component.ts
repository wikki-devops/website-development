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

}