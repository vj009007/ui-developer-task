import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface datas{
  name: any;
  domain:string ;
  male:string;
  dob:string ;
  phone:string;
  location:string;
  }

export interface DialogData {
  data: datas;
}

@Component({
  selector: 'app-form-popup',
  templateUrl: './form-popup.component.html',
  styleUrls: ['./form-popup.component.scss']
})
export class FormPopupComponent implements OnInit {
  datas:any;
  constructor(public dialogRef: MatDialogRef<FormPopupComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  ngOnInit(): void {
   console.log(this.data.data); 
   this.datas = this.data.data;                                                                                                                                                                                            
  }

  onSubmit(formValue: any) {
    this.dialogRef.close(this.datas);
  }
}
