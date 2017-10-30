import { Component, OnInit } from '@angular/core';
//import { FormsModule } from '@angular/forms';
import {MatDialog, MatDialogRef} from '@angular/material';
import {MatDialogModule} from '@angular/material';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = {name: '', password: '',remember: false};

  constructor(private dialogRef: MatDialogRef<LoginComponent>) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log("User: " + this.user);
    this.dialogRef.close();
  }
}
