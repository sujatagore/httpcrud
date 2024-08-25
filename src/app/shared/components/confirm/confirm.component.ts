import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  title !: string

  constructor(
    public dialogRef : MatDialogRef<ConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data : string
  ) { 
    this.title = data
  }

  ngOnInit(): void {
  }

  onClose(flag : boolean){
    this.dialogRef.close(flag)
  }

}
