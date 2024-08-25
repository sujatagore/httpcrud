import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Iposts } from '../../module/posts.interface';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-postsdashboard',
  templateUrl: './postsdashboard.component.html',
  styleUrls: ['./postsdashboard.component.scss']
})
export class PostsdashboardComponent implements OnInit {

  postsArr : Array<Iposts> = []
  constructor(
    private _postsService : PostsService,
    private _loaderService : LoaderService
  ) { }

  ngOnInit(): void {
    this.getPosts()
  }

  getPosts(){
    this._postsService.fetchAllPosts()
      .subscribe(res =>{
        // for (const key in res) {
        //   this.postsArr.push({...res[key], id: key})
        // }
        // console.log(this.postsArr)

          this.postsArr = res
          // this._loaderService.loaderStatus$.next(false)
      })
  }

}
