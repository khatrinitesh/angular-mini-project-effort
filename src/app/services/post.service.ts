import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = "https://jsonplaceholder.typicode.com/posts"

  constructor(private httpClient: HttpClient) { }

  getPosts() {
    return this.httpClient.get(this.url)
  }

  deletePost(id) {
    return this.httpClient.delete(this.url + "/" + id);
  }

}
