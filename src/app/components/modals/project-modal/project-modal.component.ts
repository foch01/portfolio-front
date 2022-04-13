import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.less']
})
export class ProjectModalComponent implements OnInit {
  @Input() public data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
