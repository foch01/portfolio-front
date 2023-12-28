import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ProjectModalComponent } from '../modals/project-modal/project-modal.component';

@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.less'],
    providers: [NzModalService],
})

export class PortfolioComponent implements OnInit {

    constructor(private readonly nzModalService: NzModalService) { }

    ngOnInit(): void {
    }

    public handleOpenModalLeocare() {
        this.nzModalService.create({
            nzTitle: 'Leocare',
            nzContent: ProjectModalComponent,
            nzComponentParams: {
                data: {
                    imgName: 'leocare.png',
                    description: 'Development and maintainability of the web application and micro services.\n' + 'Definition of a philosophy and a technical framework to improve the developer experience within the company.',
                    technos: ['NestJS', 'Angular', 'Jest', 'Grafana', 'Github', 'Docker', 'Azure', 'Terraform'],
                    missions: [
                        'Development of new core features (amendment, new product, new service)',
                        'Code review',
                        'Added observability in the application',
                        'Reflection and implementation of the architecture',
                        'Adding data validation to Mongo schemas',
                        'Write test with TDD method',
                        'Release / Github Deployments in production',
                        'Writing of technical documentation',
                        'Support and ticket resolution',
                        'Onboarding of new crew members',
                    ],
                    role: 'Software & Platform developer',
                },
            },
            nzCancelText: null,
            nzWidth: 860,
        });
    }

    public handleOpenModalKering() {
        this.nzModalService.create({
            nzTitle: 'Kering',
            nzContent: ProjectModalComponent,
            nzComponentParams: {
                data: {
                    imgName: 'kering.png',
                    description: 'Development and maintainability in agile method (Kanban) of a proxy with more than 30 million daily requests. A complex project connected to more than 50 micro-services available internationally for a luxury group. This project is composed in hexagonal architecture with particular attention to testing to ensure the quality of the code, deployed on the AWS cloud.\n' +
                        'The network architecture is managed in IAAS via Terraform.',
                    technos: ['NestJS', 'ExpressJS', 'Jest', 'AWS', 'ELK', 'Kafka', 'Jenkins', 'Grafana', 'Docker', 'Terraform'],
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
                },
            },
            nzCancelText: null,
            nzWidth: 860,
        });
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
                        'Development of core front end and back end features',
                        'Code review',
                    ],
                    role: 'Fullstack developer',
                },
            },
            nzCancelText: null,
            nzWidth: 860,
        });
    }

    public handleOpenModalEcarryon() {
        this.nzModalService.create({
            nzTitle: 'ecarryon',
            nzContent: ProjectModalComponent,
            nzComponentParams: {
                data: {
                    imgName: 'ecarryon.png',
                    description: 'This application is intended for an accounting agency to simplify the management of its own customers.\n' +
                        'In a second step, the service is sold to other accounting agencies.\n' +
                        'The application allows you to perform various essential tasks for the accounting of a company such as the information of the different amounts of VAT, the addition and the management of the status of the entries.',
                    technos: ['NestJS', 'Angular', 'Typescript', 'PostgreSQL', 'Heroku', 'Bitbucket'],
                    missions: [
                        'Daily stand-up animation',
                        'Presentation of the end of sprints to the client',
                        'Evolving maintenance',
                        'Development of core front end and back end features',
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
            nzTitle: 'Onestaff',
            nzContent: ProjectModalComponent,
            nzComponentParams: {
                data: {
                    imgName: 'onestaff.png',
                    description:
                        'Onestaff is an application available on mobile and web. It\'s objective is to connect companies in the hotel and catering industry with workers who are looking for a short mission (one evening, 1 day, 2 days)',
                    technos: ['Angular', 'SASS', 'React Native', 'Github'],
                    missions: [
                        'Daily stand-up animation',
                        'Presentation of the end of sprints to the client',
                        'Evolving maintenance',
                        'Development of core front end and back end features',
                        'Code review',
                    ],
                    role: 'Front-end developer',
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
                    description:
                        'This application allows you to track working time on projects by day. This slack bot also allows you to retrieve the mood of employees and the day you want to come to the office to ensure that there is enough office space for people in person.\n' +
                        'All data can be exported to excel. This project is an internal company project (Needone)',
                    technos: ['ExpressJS', 'Typescript', 'MongoDB', 'Slack API', 'Jenkins', 'Docker', 'Github'],
                    missions: [
                        'Architectural design',
                        'Evolving maintenance',
                        'Development of core back end features',
                        'Code review',
                    ],
                    role: 'Back-end developer',
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
                    description: 'This project allows you to upload a work or a document and thus record the digital fingerprint in the blockchain (Bitcoin)',
                    technos: ['AngularJS', 'CSS'],
                    missions: [
                        'Application maintenance',
                    ],
                    role: 'Front-end developer',
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
                    description: 'This jobbing application made it possible to sell individual skills (jobber) to other individuals who had a specific request (painting a door, moving assistance, portrait photography, etc.)',
                    technos: ['Angular', 'Typescript', 'Bootstrap', 'Gitlab'],
                    missions: [
                        'Daily stand-up animation',
                        'Presentation of the end of sprints to the client',
                        'Evolving maintenance',
                        'Development of core front and back features',
                        'Code review',
                    ],
                    role: 'Front-end developer',
                },
            },
            nzCancelText: null,
            nzWidth: 860,
        });
    }

    public handleOpenModalToolbox() {
        this.nzModalService.create({
            nzTitle: 'Toolbox',
            nzContent: ProjectModalComponent,
            nzComponentParams: {
                data: {
                    imgName: 'toolbox.png',
                    description: 'In this application I publish tools that can simplify my life and therefore simplify the life of other developers. I also add examples of architectural designs or various presentations. It\'s like my sandbox',
                    technos: ['Angular', 'Typescript', 'ExpressJS', 'puppeteer', 'Github', 'Firebase'],
                    missions: [
                        'Explore the world',
                    ],
                    role: 'Adventurer developer',
                },
            },
            nzCancelText: null,
            nzWidth: 860,
        });
    }

}
