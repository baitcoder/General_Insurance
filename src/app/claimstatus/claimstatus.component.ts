import { Component, OnInit } from '@angular/core';
import { ClaimService } from '../claim.service';
import { Claimstatus } from '../claimstatus';
import { Claim } from '../claim';
import { Router } from '@angular/router';

@Component({
  selector: 'app-claimstatus',
  templateUrl: './claimstatus.component.html',
  styleUrls: ['./claimstatus.component.css']
})
export class ClaimstatusComponent implements OnInit {

  cpsObj:Claimstatus[] = []
  tempId:number= 0
  constructor(private cs:ClaimService,private router:Router) {
    this.cs.getClaimList().subscribe(data=>{
      this.cpsObj = data;
      console.log(this.cpsObj)
    })
   }

  ngOnInit(): void {
    
  }

  edit(objId:number){
//    obj.isapproved = this.isApproved;
    this.tempId = objId;
    this.cs.approveClaimTable(this.tempId).subscribe(()=>{
      alert("Claim Approved....");
      this.router.navigate(['claimapproval']).then(() => {
        window.location.reload();
      });
    })
  }
}



