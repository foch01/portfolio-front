import { Component, OnInit } from '@angular/core';
import * as Typewriter from 'typewriter-effect/dist/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
  title = 'portfolio-front';


  ngOnInit() {
    this.handleTypewriter();
  }

  private handleTypewriter(): void {
    const typewriterHtml = document.getElementById('typewriter');

    const typewriter = new Typewriter(typewriterHtml, {
      loop: true,
      delay: 60,
      deleteSpeed: 30,
    });

    typewriter
        .pauseFor(2500)
        .typeString('Developer')
        .pauseFor(1200)
        .deleteChars(9)
        .typeString('Sportsman')
        .pauseFor(1200)
        .deleteChars(9)
        .typeString('Entrepreneur')
        .pauseFor(1200)
        .deleteChars(12)
        .start();
  }
}
