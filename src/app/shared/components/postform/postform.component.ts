import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { Iposts } from '../../module/posts.interface';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-postform',
  templateUrl: './postform.component.html',
  styleUrls: ['./postform.component.scss']
})
export class PostformComponent implements OnInit {

  postsForm !: FormGroup;
  isinEditMode : boolean = false;
  postsId !: string;
  postsObj !: Iposts;

  constructor(
    private _route : ActivatedRoute,
    private _postsService : PostsService,
    private _router : Router,
    private _snackbar : SnackbarService
  ) { }

  ngOnInit(): void {
    this.createPostsForm();
    this.formMode()
  }

  createPostsForm(){
    this.postsForm = new FormGroup({
        content: new FormControl(null, [Validators.required]),
        title: new FormControl(null, [Validators.required]),
        userId: new FormControl('1', [Validators.required])
    })
  }

  formMode(){
    this.postsId = this._route.snapshot.params['postsId'];
    if (this.postsId) {
      this.isinEditMode = true;
      this._postsService.fetchPost(this.postsId)
        .subscribe(res =>{
          console.log(res);
          this.postsObj = res;
          this.postsForm.patchValue(this.postsObj)
        })
    } else {
      this.isinEditMode = false
    }
  }

  onAddPosts(){
    if (this.postsForm.valid) {
      let newPost = this.postsForm.value;
      console.log(newPost);
      this.postsForm.reset()
      this._postsService.createNewPost(newPost)
        .subscribe(data =>{
          console.log(data);
          this._router.navigate(['/posts']);
          this._snackbar.openSnackBar(`The Post ${newPost.title} is added Successfully!!!`)
        })
    }
  }

  onPostsUpdate(){
    if (this.postsForm.valid) {
      let uptObj = {...this.postsForm.value, id: this.postsId};
      this._postsService.postsUpdate(uptObj)
        .subscribe(res =>{
          console.log(res);
          this.postsForm.reset();
          this._router.navigate(['/posts']);
          this._snackbar.openSnackBar(`The Post ${uptObj.title} is updated Successfully!!!`)
        })
    }
  }
}
