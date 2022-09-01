import { Component, OnInit } from '@angular/core';
import { Premium } from '../premium';


@Component({
  selector: 'app-premium',
  templateUrl: './premium.component.html',
  styleUrls: ['./premium.component.css']
})
export class PremiumComponent implements OnInit {
 amount:number=0
 type2compr:number=2000
 type2third:number=5000
 type4compr:number=5000
 type4third:number=8000
 premium:Premium={
    plantype:'',
    vehicletype:'',
    term:0
 }
  
  constructor() { }

  ngOnInit(): void {
  }


  calculate(premium:Premium){
    if (this.premium.vehicletype=="2Wheeler"){
      if (this.premium.plantype=="ThirdParty"){
        this.amount=(this.premium.term*this. type2third)
      }
      if(this.premium.plantype=="Comprehensive"){
        this.amount=(this.premium.term*this. type2compr)
      }
    }
    if (this.premium.vehicletype=="4Wheeler"){
      if (this.premium.plantype=="ThirdParty"){
        this.amount=(this.premium.term*this. type4third)
      }
      if(this.premium.plantype=="Comprehensive"){
        this.amount=(this.premium.term*this. type4compr)
      }
    }

  }
}
