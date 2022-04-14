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
          paragrapheOne: 'During my master\'s degree in IT development, I was able to see the different aspects of the developer/architect profession but also of project management in agile mode or V-cycle and more ambitious technologies such as blockchain.',
          paragrapheTwo: 'During the 3 years of schooling, the school\'s pedagogy was focused on putting knowledge into practice in mini-projects.',
          paragrapheThree: 'At the same time, I did a work-study program in the Needone company (3 weeks per month) where I could put into practice some of what I learned at school and vice versa. It\'s a model that I really appreciated during my studies and where I learned a lot.',
        },
        {
          date: '2016-2017',
          name: 'Code Académie',
          paragrapheOne: 'During this course I confirmed the basics of web development in concrete projects for associations (DDCSPP) or real customers (ARMADA).',
          paragrapheTwo: 'At the end of school I continued on a full-time internship at the Web agency Everest in Rennes in Brittany.',
        },
      ],
    },
    {
      schools: [
        {
          date: '2012-2016',
          name: 'BAC S - Lycée Kerneuzec',
          paragrapheOne: '',
          paragrapheTwo: '',
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
        .typeString('Web Developer')
        .pauseFor(1200)
        .deleteChars(13)
        .typeString('Sportsman')
        .pauseFor(1200)
        .deleteChars(9)
        .typeString('Entrepreneur')
        .pauseFor(1200)
        .deleteChars(12)
        .start();
  }
}
