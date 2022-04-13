import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ProjectModalComponent } from '../modals/project-modal/project-modal.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.less'],
  providers: [NzModalService]
})

export class PortfolioComponent implements OnInit {

  constructor(private readonly nzModalService: NzModalService) { }

  ngOnInit(): void {
  }

  public handleOpenModalKering() {
    this.nzModalService.create({
      nzTitle: 'Kering',
      nzContent: ProjectModalComponent,
      nzComponentParams: { data: {
        imgName: 'kering.png',
        description: 'Développement et maintenabilité en méthode agile d’un proxy avec plus de 30 millions de requêtes journalières. Un projet complexe connecté à plus de 50  micro-services disponible à l’international pour un groupe de luxe.',
        technos: ['NestJS', 'ExpressJS', 'AWS', 'ELK', 'Kafka', 'Grafana', 'Docker'],
        missions: [
          'Développement de nouvelles fonctionnalités',
          'Mise en production / déploiements AWS',
          'Observability avec la suite ELK et Grafana',
          'Rédaction de documentations techniques',
          'Support et résolution de tickets',
          'Onboarding des nouveaux arrivants'
        ],
        role: 'Developer Back-end (Lead)'
        }},
      nzCancelText: null,
      nzWidth: 860
    })
  }

  public handleOpenModalGroupy() {
    this.nzModalService.create({
      nzTitle: 'Kering',
      nzContent: ProjectModalComponent,
      nzComponentParams: { data: {
          imgName: 'groupy.png',
          description: 'Développement et maintenabilité en méthode agile d’un proxy avec plus de 30 millions de requêtes journalières. Un projet complexe connecté à plus de 50  micro-services disponible à l’international pour un groupe de luxe.',
          technos: ['NestJS', 'ExpressJS', 'AWS', 'ELK', 'Kafka', 'Grafana', 'Docker'],
          missions: [
            'Développement de nouvelles fonctionnalités',
            'Mise en production / déploiements AWS',
            'Observability avec la suite ELK et Grafana',
            'Rédaction de documentations techniques',
            'Support et résolution de tickets',
            'Onboarding des nouveaux arrivants'
          ],
          role: 'Developer Back-end (Lead)'
        }},
      nzCancelText: null,
      nzWidth: 860
    })
  }

}
