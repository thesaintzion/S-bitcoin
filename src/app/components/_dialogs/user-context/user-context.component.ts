import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-user-context',
  templateUrl: './user-context.component.html',
  styleUrls: ['./user-context.component.scss']
})
export class UserContextComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UserContextComponent>,
    @Inject(MAT_DIALOG_DATA) public data,) { }

  ngOnInit() {
    console.log('DATA', this.data)
  }

}
