import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
}) 
export class LoginComponent implements OnInit {

  userid:number=0
  password:string=''
  constructor(private router:Router,private us:UserService) { }

  ngOnInit(): void {
  }

  login(userid:number,pass:string){
    console.log(userid)
    this.userid=(userid)
    this.password=pass
    if((this.userid==8888) && (this.password=='Admin@12345')){
    this.router.navigate(['claimapproval']);
    }
    
    else {
      console.log(this.userid+" "+this.password)
      this.us.userlogin(this.userid,this.password).subscribe(()=>{
      alert("LoginSuccess")
      this.router.navigate(['/Login/'+this.userid+'/Userpage'])
    })
    }
  }

  forgetpass(){
    this.router.navigate(['forget'])
   }
   resetpass(){
    this.router.navigate(['reset/',this.userid])
   }
}