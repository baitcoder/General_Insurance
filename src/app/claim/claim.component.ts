import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Claim } from '../claim';
import { ClaimService } from '../claim.service';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css'],
  providers:[DatePipe]
})
export class ClaimComponent implements OnInit {

  id:number=0
  claim:Claim={ 
    claimNo:0,
    claimDate:new Date(),
    reason:'', 
    // approveStatus:0,
    amount:0.00,
    // PolicyId:0,
    UserId:0,
    // PlanId:0
  }
 

  constructor(private claimservice:ClaimService,private router:Router,private activatedroute:ActivatedRoute,private datePipe: DatePipe) { }

  ngOnInit(): void {
    const tid=this.activatedroute.snapshot.paramMap.get('id')
    this.id=Number(tid)

  }
  submit(c:Claim){
    this.claim=c
    // this.claim.UserId=this.id
    console.log(this.claim)
    this.claimservice.claim(this.claim).subscribe(()=>{
      alert("Your Claim is Success\nPending for Approval") 
      this.router.navigate(['/Login/'+this.id+'/Userpage'])
    })
    
  }
}



  



  //  this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');

  



