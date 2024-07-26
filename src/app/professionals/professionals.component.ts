import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormPopupComponent } from '../form-popup/form-popup.component';
interface datas{
name: any;
domain:string ;
male:string;
dob:string ;
phone:string;
location:string;
}

@Component({
  selector: 'app-professionals',
  templateUrl: './professionals.component.html',
  styleUrls: ['./professionals.component.scss']
})
export class ProfessionalsComponent implements OnInit {

  datas:any={};
  constructor(public dialog: MatDialog) {}
  ngOnInit(): void {
    this.datas.name='Mohd Rizwan';
    this.datas.domain='www.xyz.com';
    this.datas.gender='Male';
    this.datas.dob='2nd July 2000' ;
    this.datas.phone='+919876543210';
    this.datas.location='Dehli 110017';
  }
  
  openDialog() {
    this.dialog.open(FormPopupComponent, {
      data: {data: this.datas},
      disableClose: true
    }).afterClosed()
    .subscribe((response) => {
        console.log(response);
        this.datas=response;
    
    });
  }
}

