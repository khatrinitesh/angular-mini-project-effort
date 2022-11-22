import { Component, Input, OnInit, Output ,EventEmitter, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  // INPUT
  @Input() childMsg:string;
  @Input() products;
  @Input() friends;
  @Input() family;
  @Input() foods;
  @Input() cricket;
  @Input() items:any[] = [];
  @Input() itemTemplate:TemplateRef<HTMLElement>

  // OUTPUT
  @Output() btnToggle=new EventEmitter();
  @Output() status = new EventEmitter<boolean>()
  
  //VARIABLE NAME
  enabled:boolean;
  disabled:boolean;
  constructor() { }

  ngOnInit() {
  }
  
  btnRemove(obj,index){
    console.log( obj)
    if(obj == 'products'){
      this.products.splice(index,1)
    }
    else if(obj == 'friends'){
          this.friends.splice(index,1)
    }
    else if(obj == 'family'){
          this.family.splice(index,1)
    }
    else if(obj == 'foods'){
      this.foods.splice(index,1)
    }
    else if(obj == 'cricket'){
      this.cricket.splice(index,1)
    }
  }
  isActive(active:boolean){
    this.status.emit(active);
    if(active){
      this.enabled = true;
      this.disabled = false;
    }
    else{
      this.enabled = false;
      this.disabled = true;
    }
  }

}
