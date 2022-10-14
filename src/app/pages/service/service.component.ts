import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PostService } from "../../services/post.service";

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {


  @Input() ExampleTextParent: string = ''
  httpData: any;
  public txtSendChild: string = 'nitesh khatri is child service'
  @Output() BtnExampleO = new EventEmitter();

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(response => {
      this.httpData = response
    })
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
