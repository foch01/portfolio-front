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
          description: 'Development and maintainability in agile method (Kanban) of a proxy with more than 30 million daily requests. A complex project connected to more than 50 micro-services available internationally for a luxury group. This project is composed in hexagonal architecture with particular attention to testing to ensure the quality of the code, deployed on the AWS cloud.\n' +
              '\n' +
              'The network architecture is managed in IAAS via Terraform.',
          technos: ['NestJS', 'ExpressJS', 'JEST', 'AWS', 'ELK', 'Kafka', 'Jenkins', 'Grafana', 'Docker', 'Terraform'],
          missions: [
            'Development of new core features',
            'Code review',
            'Write test with TDD method',
            'Release / AWS Deployments in production',
            'Observability with the ELK suite and Grafana',
            'Writing of technical documentation',
            'Support and ticket resolution',
            'Onboarding of new crew members',
          ],
          role: 'Back-end developer (Lead)',
        }},
      nzCancelText: null,
      nzWidth: 860
    })
  }

  public handleOpenModalGroupy() {
    this.nzModalService.create({
      nzTitle: 'Groupy',
      nzContent: ProjectModalComponent,
      nzComponentParams: {
        data: {
          imgName: 'groupy.png',
          description: 'This project aims to connect buyers with suppliers to form a group and then buy in batches to save money. The project is linked to a back office to manage platform users (invoices, users, categories,\n' +
              'KYC verification, product list...).',
          technos: ['NestJS', 'Angular', 'Typescript', 'PostgreSQL', 'MangoPay', 'Google Maps', 'Heroku', 'Github'],
          missions: [
            'Daily stand-up animation',
            'Presentation of the end of sprints to the client',
            'Evolving maintenance',
            'Development of core front and back features',
            'Code review',
          ],
          role: 'Fullstack developer',
        },
      },
      nzCancelText: null,
      nzWidth: 860,
    })
  }

  public handleOpenModalEcarryon() {
    this.nzModalService.create({
      nzTitle: 'Groupy',
      nzContent: ProjectModalComponent,
      nzComponentParams: {
        data: {
          imgName: 'ecarryon.png',
          description: 'This project aims to connect buyers with suppliers to form a group and then buy in batches to save money. The project is linked to a back office to manage platform users (invoices, users, categories,\n' +
              'KYC verification, product list...).',
          technos: ['NestJS', 'Angular', 'Typescript', 'PostgreSQL', 'MangoPay', 'Google Maps', 'Heroku', 'Github'],
          missions: [
            'Daily stand-up animation',
            'Presentation of the end of sprints to the client',
            'Evolving maintenance',
            'Development of core front and back features',
            'Code review',
          ],
          role: 'Fullstack developer',
        },
      },
      nzCancelText: null,
      nzWidth: 860,
    });
  }

  public handleOpenModalOnestaff() {
    this.nzModalService.create({
      nzTitle: 'Groupy',
      nzContent: ProjectModalComponent,
      nzComponentParams: {
        data: {
          imgName: 'onestaff.png',
          description: 'This project aims to connect buyers with suppliers to form a group and then buy in batches to save money. The project is linked to a back office to manage platform users (invoices, users, categories,\n' +
              'KYC verification, product list...).',
          technos: ['NestJS', 'Angular', 'Typescript', 'PostgreSQL', 'MangoPay', 'Google Maps', 'Heroku', 'Github'],
          missions: [
            'Daily stand-up animation',
            'Presentation of the end of sprints to the client',
            'Evolving maintenance',
            'Development of core front and back features',
            'Code review',
          ],
          role: 'Fullstack developer',
        },
      },
      nzCancelText: null,
      nzWidth: 860,
    });
  }

  public handleOpenModalLapala() {
    this.nzModalService.create({
      nzTitle: 'Lapala',
      nzContent: ProjectModalComponent,
      nzComponentParams: {
        data: {
          imgName: 'lapala.png',
          description: 'This project aims to connect buyers with suppliers to form a group and then buy in batches to save money. The project is linked to a back office to manage platform users (invoices, users, categories,\n' +
              'KYC verification, product list...).',
          technos: ['NestJS', 'Angular', 'Typescript', 'PostgreSQL', 'MangoPay', 'Google Maps', 'Heroku', 'Github'],
          missions: [
            'Daily stand-up animation',
            'Presentation of the end of sprints to the client',
            'Evolving maintenance',
            'Development of core front and back features',
            'Code review',
          ],
          role: 'Fullstack developer',
        },
      },
      nzCancelText: null,
      nzWidth: 860,
    });
  }

  public handleOpenModalBlockchainyourIP() {
    this.nzModalService.create({
      nzTitle: 'BlockchainyourIP',
      nzContent: ProjectModalComponent,
      nzComponentParams: {
        data: {
          imgName: 'blockchainyourip.png',
          description: 'This project aims to connect buyers with suppliers to form a group and then buy in batches to save money. The project is linked to a back office to manage platform users (invoices, users, categories,\n' +
              'KYC verification, product list...).',
          technos: ['NestJS', 'Angular', 'Typescript', 'PostgreSQL', 'MangoPay', 'Google Maps', 'Heroku', 'Github'],
          missions: [
            'Daily stand-up animation',
            'Presentation of the end of sprints to the client',
            'Evolving maintenance',
            'Development of core front and back features',
            'Code review',
          ],
          role: 'Fullstack developer',
        },
      },
      nzCancelText: null,
      nzWidth: 860,
    });
  }

  public handleOpenModalAmazjob() {
    this.nzModalService.create({
      nzTitle: 'Amazjob',
      nzContent: ProjectModalComponent,
      nzComponentParams: {
        data: {
          imgName: 'amazjob.png',
          description: 'This project aims to connect buyers with suppliers to form a group and then buy in batches to save money. The project is linked to a back office to manage platform users (invoices, users, categories,\n' +
              'KYC verification, product list...).',
          technos: ['NestJS', 'Angular', 'Typescript', 'PostgreSQL', 'MangoPay', 'Google Maps', 'Heroku', 'Github'],
          missions: [
            'Daily stand-up animation',
            'Presentation of the end of sprints to the client',
            'Evolving maintenance',
            'Development of core front and back features',
            'Code review',
          ],
          role: 'Fullstack developer',
        },
      },
      nzCancelText: null,
      nzWidth: 860,
    });
  }

}
