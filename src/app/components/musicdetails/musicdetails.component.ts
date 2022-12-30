import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-musicdetails',
  templateUrl: './musicdetails.component.html',
  styleUrls: ['./musicdetails.component.scss']
})
export class MusicdetailsComponent implements OnInit {

  @Input() musicianName:string | undefined;
  @Output() newMusicianEvent = new EventEmitter<string>();
  @Output() newCycleEvent = new EventEmitter<string>();
  @Output() movieSelectedEventEmitter = new EventEmitter<string>();

  movieSelected(selectedMovie:string){
    this.movieSelectedEventEmitter.emit(selectedMovie)
  }


  addNewArtist(val:string){
    console.log(val);
    this.newMusicianEvent.emit(val);
  }

  addNewCycle(val:string){
    console.log(val);
    this.newCycleEvent.emit(val);
  }
  
  constructor() { }

  ngOnInit():void {
  }

}
