import { Component, OnInit,Input,TemplateRef } from '@angular/core';

@Component({
  selector: 'app-projectcontent',
  templateUrl: './projectcontent.component.html',
  styleUrls: ['./projectcontent.component.scss']
})
export class ProjectcontentComponent implements OnInit {

  constructor() { }

  @Input() headerTemplate:TemplateRef<any>;
  @Input() bodyTemplate:TemplateRef<any>;
  @Input() footerTemplate:TemplateRef<any>;

  ngOnInit() {
  }

}
