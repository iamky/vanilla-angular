import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { FormGroup,FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { CreateUserService } from './create-user.service';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'vanilla-angular';
  
  // user:any = {
  //   username:'',
  //   password:''
  // } 

  //  onSubmit(){
  //    console.log(this.user);
    
  //  }
  
  constructor(private userData:CreateUserService) {
    
  }

  createuserform = new FormGroup({
    username:new FormControl(''),
    password:new FormControl('')
  });

  submitForm(){
    console.log(this.createuserform.value);
    this.userData.createUser(this.createuserform.value).subscribe((data)=>{console.log("user data saved");
    })
    
  }

}

