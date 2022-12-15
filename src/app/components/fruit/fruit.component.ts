import { JSDocTagName } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {LIST_FRIENDS} from 'src/app/json/index';

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.scss']
})
export class FruitComponent implements OnInit {

  @Input() fruit: string
  @Output() select = new EventEmitter();
  fruitItem:boolean=false;

  btnToggleFruit(){
    this.fruitItem = !this.fruitItem
  }


  listfriend = LIST_FRIENDS





  workers: any = [

    'worker 1',

    'worker 2',

    'worker 3',

    'worker 4',

    'worker 5',

  ]

  onSelect() {
    this.select.emit(this.fruit);
  }

  constructor() { }

  ngOnInit() {
  }

}
