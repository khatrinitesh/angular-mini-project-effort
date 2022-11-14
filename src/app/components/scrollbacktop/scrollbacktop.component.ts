import { Component, OnInit,HostListener, } from '@angular/core';

@Component({
  selector: 'app-scrollbacktop',
  templateUrl: './scrollbacktop.component.html',
  styleUrls: ['./scrollbacktop.component.scss']
})
export class ScrollbacktopComponent implements OnInit {


  public isShow:boolean=false;
  public topPosToStartShowing:number= 100;

  

  constructor() { }
  @HostListener('window:scroll')
  checkScroll() {      
    // window의 scroll top
    // Both window.pageYOffset and document.documrdoentElement.scrollTop returns the same result in all the cases. window.pageYOffset is not supported below IE 9.
    const scrollPosition  = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0

    console.log('[scroll]', scrollPosition);
    
    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  // TODO: Cross browsing
  gotoTop() {
    window.scroll({
      top:0,
      left:0,
      behavior:'smooth'
    })
  }

  ngOnInit() {
  }

}
