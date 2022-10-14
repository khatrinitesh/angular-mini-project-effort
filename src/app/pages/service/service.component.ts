import { Component, OnInit } from '@angular/core';
import { PostService } from "../../services/post.service";

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  httpData: any;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(response => {
      this.httpData = response
    })
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
