import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment.prod';
import { Iposts } from '../module/posts.interface';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  baseUrl : string = `${environment.baseUrl}`
  postsUrl : string = `${environment.baseUrl}/posts.json`

  constructor(
    private _http : HttpClient,
    private _loaderService : LoaderService
  ) { }

  fetchAllPosts():Observable<Array<Iposts>>{
    // return this._http.get<any>(this.postsUrl)
    // this._loaderService.loaderStatus$.next(true)
    // let headers = new HttpHeaders({
    //   'content-type' : 'Application/json',
    //   'Token' : 'Get From LS'
    // })
    // return this._http.get<Array<Iposts>>(this.postsUrl,{ headers })
    return this._http.get<Array<Iposts>>(this.postsUrl)
            .pipe(
              map(data =>{
                console.log(data);
                let postsArr : Array<Iposts> = [];
                for (const key in data) {
                  postsArr.unshift({...data[key], id: key})
                }
                console.log(postsArr)
                return postsArr
              })
            )
  }

  fetchPost(id : string): Observable<Iposts>{
    
    let singlePost = `${this.baseUrl}/posts/${id}.json`;
    // let headers = new HttpHeaders({
    //   'content-type' : 'Application/json',
    //   'Token' : 'Get From LS'
    // })
    // return this._http.get<Iposts>(singlePost,{ headers })
    return this._http.get<Iposts>(singlePost)
  }

  createNewPost(post : Iposts): Observable<{name : string}>{
    // let headers = new HttpHeaders({
    //   'content-type' : 'Application/json',
    //   'Token' : 'Get From LS'
    // })
    // return this._http.post<{name : string}>(this.postsUrl, post, { headers })
    return this._http.post<{name : string}>(this.postsUrl, post)
  }

  postsUpdate(uptPosts : Iposts):Observable<Iposts>{
    let updateUrl = `${this.baseUrl}/posts/${uptPosts.id}.json`;
    return this._http.patch<Iposts>(updateUrl, uptPosts)
  }

  postsRemove(id : string):Observable<null>{
    let removeUrl = `${this.baseUrl}/posts/${id}.json`;
    return this._http.delete<null>(removeUrl)
  }
}