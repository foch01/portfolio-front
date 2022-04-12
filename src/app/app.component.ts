import { Component, OnInit, ViewChild } from '@angular/core';
import { NzCarouselComponent } from 'ng-zorro-antd/carousel';
import * as Typewriter from 'typewriter-effect/dist/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
  title = 'portfolio-front';
  slides = [
    {
      schools: [
        {
          date: '2017-2020',
          name: 'IMIE - Institut de la Filière Numérique',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque debitis error et facilis fuga iure nemo nostrum obcaecati odio officia officiis, perferendis placeat praesentium qui quidem quisquam repellat suscipit velit.',
        },
        {
          date: '2016-2017',
          name: 'Code Académie',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque debitis error et facilis fuga iure nemo nostrum obcaecati odio officia officiis, perferendis placeat praesentium qui quidem quisquam repellat suscipit velit.',
        },
      ],
    },
    {
      schools: [
        {
          date: '2012-2016',
          name: 'BAC S - Lycée Kerneuzec',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque debitis error et facilis fuga iure nemo nostrum obcaecati odio officia officiis, perferendis placeat praesentium qui quidem quisquam repellat suscipit velit.',
        },
      ],
    },
  ];
  @ViewChild(NzCarouselComponent, { static: false }) myCarousel!: NzCarouselComponent;


  ngOnInit() {
    this.handleTypewriter();
  }

  prev() {
    this.myCarousel.pre();
  }

  next() {
    console.log(this.myCarousel.activeIndex);
    this.myCarousel.next();
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
