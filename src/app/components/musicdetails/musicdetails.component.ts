import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-musicdetails',
  templateUrl: './musicdetails.component.html',
  styleUrls: ['./musicdetails.component.scss']
})
export class MusicdetailsComponent implements OnInit {

  @Input() musicianName:string | undefined;
  @Output() newMusicianEvent = new EventEmitter<string>();




  addNewArtist(val:string){
    this.newMusicianEvent.emit(val);
  }
  
  constructor() { }

  ngOnInit():void {
  }

}
