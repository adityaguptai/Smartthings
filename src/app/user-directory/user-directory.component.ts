import { Component, OnInit, ElementRef } from '@angular/core';
import { SavedataService } from '../services/savedata.service';
import { log } from 'util';
import { Element } from '@angular/compiler';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-user-directory',
  templateUrl: './user-directory.component.html',
  styleUrls: ['./user-directory.component.css']
})
export class UserDirectoryComponent implements OnInit {

  username: string;
  email: string;
  phoneno: number;
  address: string;
  users: Array<any>;

  constructor(private saveData: SavedataService, private elRef: ElementRef) { }

  ngOnInit() {
  //   $('.ui.modal')
  //     .modal('show')
  //     ;
    // this.elRef.nativeElement.querySelector('.ui.modal').modal('show');
    this.saveData.fetchData().subscribe(data => {
      if (data.success) {
        this.users = data.data;
        console.log(this.users);
        console.log('success');
      } else {
        console.log('failure to save');

      }
    });
  }

  saveDetails() {
    console.log(this.username);

    this.saveData.save({
      username: this.username, address: this.address, phoneno: this.phoneno, email: this.email
    }).subscribe(data => {
      if (data.success) {

        console.log('success');
      } else {
        console.log('failure to save');

      }
    });

  }

  onClick() {
    // this.saveData.edit({
    //   username: this.username, address: this.address, phoneno: this.phoneno, email: this.email
    // }).subscribe(data => {
    //   if (data.success) {

    //     console.log('success to edit');
    //   } else {
    //     console.log('failure to save');
    //   }
    // });
  }
}
