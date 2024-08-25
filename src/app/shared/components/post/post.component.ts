import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { Iposts } from '../../module/posts.interface';
import { LoaderService } from '../../services/loader.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConfirmComponent } from '../confirm/confirm.component';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  postsId !: string;
  postsObj !: Iposts

  constructor(
    private _route : ActivatedRoute,
    private _postsservice : PostsService,
    private _router : Router,
    private _matDailog : MatDialog,
    private _snackbar : SnackbarService
  ) { }

  ngOnInit(): void {
      this.getPostObj()
  }

  getPostObj(){
    this.postsId = this._route.snapshot.params['postsId'];

    this._postsservice.fetchPost(this.postsId)
          .subscribe(res =>{
            this.postsObj = res
          })
  }

  onPostsRemove(){
      let matDialogConf = new MatDialogConfig();
      matDialogConf.width = '500px';
      matDialogConf.disableClose = true;
      matDialogConf.data = `Are you sure oyu want to remove this Posts?`;
      let matDialogRef = this._matDailog.open(ConfirmComponent, matDialogConf)

      matDialogRef.afterClosed()
        .subscribe(res =>{
          console.log(res);
          if (res) {
            this._postsservice.postsRemove(this.postsId)
              .subscribe(res =>{
                console.log(res);
                this._router.navigate(['/posts']);
                this._snackbar.openSnackBar(`The Post ${this.postsObj.title} is removed Successfully!!!`)
              })
          }
        })
    // 
  }
}
