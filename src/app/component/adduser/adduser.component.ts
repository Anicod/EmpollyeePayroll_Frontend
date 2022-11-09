import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  userName = ""
  nameErr = ""
  constructor() { }

  ngOnInit(): void {
  }
  onInput($event:any){
    console.log("hello", $event.data)
    const nameRegx = RegExp('[A-Z]{1}[a-zA-Z\\s]{2,}$')
    if(nameRegx.test(this.userName)){
      this.nameErr = ""
      return;
    }
      this.nameErr = "name is not valid"
  }

}
