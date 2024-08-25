import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-postscard',
  templateUrl: './postscard.component.html',
  styleUrls: ['./postscard.component.scss']
})
export class PostscardComponent implements OnInit {

  @Input() postObj : any

  constructor() { }

  ngOnInit(): void {
  }

}
