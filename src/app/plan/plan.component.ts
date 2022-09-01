import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PlanService } from '../plan.service';
import { Plan } from '../plan';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})

export class PlanComponent implements OnInit {
  
  plan:Plan={
    id:0,
    type:'',
    amount:0.00,
    // typeofvehicle:'',
    userid:0,
    term:0
  }
  id:number=0;
  reg_no:string='';
  type:string='';
  term:number=0;
  TPL:number=8000
  comprehensive:number=5000


  constructor(private router:Router,private activateroute:ActivatedRoute, private planService:PlanService) { }
  ngOnInit(): void {
    const tid=this.activateroute.snapshot.paramMap.get('id')
    const treg_no=this.activateroute.snapshot.paramMap.get('reg_no')
     this.id=Number(tid)
     this.reg_no=String(treg_no)
  }
  savePlan(plan:Plan){
    this.plan=plan
    this.plan.userid=this.id
    if(this.plan.type=="ThirdParty"){
      this.plan.amount=(this.TPL*this.plan.term)
    }
    if (this.plan.type=="Comprehensive"){
      this.plan.amount=(this.comprehensive*this.plan.term)
    }
    console.log(this.plan)
    this.planService.addPlan(this.plan).subscribe(()=>{
      alert("Payment Successful!!!")
      this.router.navigate(['Login/'+this.id+'/Userpage'])
   // this.router.navigate(['/Ibuy/vdetails/:email/:regno/:type/:term', {id: this.id, regno:this.reg_no, type:this.plan.type, term:this.plan.term}])  
  })
}
  // calPlan(){

  // }
  // }
  // }
 
  // addPolicy(){
  // this.planService.addpolicy(this.plandata,this.email,this.regno).subscribe((data:Iplan)=>{this.plandata=data})
  // }

}
