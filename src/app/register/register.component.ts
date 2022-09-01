import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  cpass:string=''
  iden:string=''
  user:User={
    id:0,
    name:'',
    email:'',
    dateOfBirth:new Date(1000, 0, 0, 0, 0, 0, 0),
    contact:'',
    password:'',
  }
  constructor(private route:Router,private us:UserService) { 
    
  }
  ngOnInit(): void {
  }


  saveCust(usr:User,pass:string){
  this.user=usr 
  this.cpass=pass
  
  // this.user.contactNumber=usr.contactNumber
  if(this.cpass==this.user.password){
    console.log(this.user)
  
  this.us.registerUser(this.user).subscribe(()=>{
    
   alert("Register is Successful\nUser-ID is sent on mail")
   
     this.route.navigate(['/Login'])
  })
  // this.us.getUserID(this.user.email).subscribe(data=>{
  //   this.iden=data
  //   alert(this.iden)
  }else{
    alert("Password Mismatch Register Again!!")
    this.route.navigate(['/Register'])
  }
  }
}