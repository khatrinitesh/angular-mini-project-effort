import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';

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
    console.log(this[obj])
    if(obj == 'products'){
      this.products.splice(index,1)
    }
    else if(obj == 'friends'){
          this.friends.splice(index,1)

      // this.friends= arrobj.filter(itm => itm.id !== obj.id)
    }
    else if(obj == 'family'){
          this.family.splice(index,1)

      // this.family= arrobj.filter(itm => itm.id !== obj.id)
    }
  }

  // btnProductRemove(index){
  //   this.products.splice(index,1)
  // }
  // btnFriendRemove(index){
  //   this.friends.splice(index,1)
  // }
  // btnFamRemove(index){
  //   this.family.splice(index,1)
  // }

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
