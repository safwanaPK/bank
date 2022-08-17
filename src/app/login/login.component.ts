import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // property /variable

  header = "welcome to our BANK"
  accplaceholder = "accoountnumber please"
  acno = ""
  pswd = ""
  database: any = {
    1000: { acno: 1000, username: "neer", password: 1000, balance: 5000 },
    1001: { acno: 1001, username: "laisha", password: 1001, balance: 5000 },
    1002: { acno: 1002, username: "vyom", password: 1002, balance: 5000 }
  }


  constructor() { }

  ngOnInit(): void {
  }

  // user defined function
  acnoChange(event: any) {

    this.acno = event.target.value

  }
  pswdChange(event: any) {

    this.pswd = event.target.value
  }
  // login() {
  //   var acno = this.acno
  //   var pswd = this.pswd
  //   let userDetails = this.database
  //   if (acno in userDetails) {
  //     if (pswd == userDetails[acno]['password']) {
  //       alert('login successfull')

  //     }
  //     else {
  //       alert('incorrect password')
  //     }
  //   }
  //   else {
  //     alert('user doesnot exist')
  //   }
  // }
  login(a: any, p: any) {
    var acno = a.value
    var pswd = p.value
    let userDetails = this.database
    if (acno in userDetails) {
      if (pswd == userDetails[acno]['password']) {
        alert('login successfull')

      }
      else {
        alert('incorrect password')
      }
    }
    else {
      alert('user doesnot exist')
    }
  }
}
