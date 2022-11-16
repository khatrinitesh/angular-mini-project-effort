import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PostService } from "../../services/post.service";
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {


  @Input() ExampleTextParent: string = ''
  // @Input() data: string[];
  @Output() data:EventEmitter<string[]> =  new EventEmitter<string[]>();
  httpData: any;
  @Output() bookTitleCreated = new EventEmitter<{ title: string }>();
  bookTitle: string;
  public txtSendChild: string = 'nitesh khatri is child service'
  @Output() BtnExampleO = new EventEmitter();

  constructor(private postService: PostService,
    private http: HttpClient) {
      this.getJSON().subscribe(data => {
          console.log(data);
      })}

  ngOnInit() {
    this.data.emit(['name1', 'name2', 'name3'])
    this.postService.getPosts().subscribe(response => {
      this.httpData = response
    })
  }

  public getJSON(): Observable<any> {
    return this.http.get("./assets/mydata.json");
}

onAddTitle() {
  this.bookTitleCreated.emit({ title: this.bookTitle });
}

  btnSendExample(msg: string) {
    this.BtnExampleO.emit(msg)
  }

  deleteItem(post) {
    console.log("EXECCCC")
    console.log(post)
    console.log("--------")
    this.postService.deletePost(post.id).subscribe(response => {
      this.httpData = this.httpData.filter(item => item.id !== post.id)
      console.log('deleted')
    })
  }


}
