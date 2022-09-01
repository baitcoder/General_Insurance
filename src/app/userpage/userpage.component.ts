import { Component, OnInit } from '@angular/core';
import { Plan } from '../plan';
import { PlanService } from '../plan.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {

  planData:any[]=[]
  rid:number=0
  rpid:number=0
  

  constructor(private ps:PlanService,private router:Router,private activateroute:ActivatedRoute) {
    
   }
   
  ngOnInit(): void {
    const tid=this.activateroute.snapshot.paramMap.get('id')
    const pid=this.activateroute.snapshot.paramMap.get('id')
    this.rid=Number(tid)
    this.rpid=Number(pid)
    this.ps.getPlans(this.rid).subscribe(data=>{
      this.planData=data})
    console.log(this.planData)
  }
  
}
