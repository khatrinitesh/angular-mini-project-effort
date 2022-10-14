import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.scss']
})
export class FruitComponent implements OnInit {

  @Input() fruit: string
  @Output() select = new EventEmitter();

  onSelect() {
    this.select.emit(this.fruit);
  }

  constructor() { }

  ngOnInit() {
  }

}
