import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vregister',
  templateUrl: './vregister.component.html',
  styleUrls: ['./vregister.component.css']
})
export class VregisterComponent implements OnInit {
  id:number=0
  vehicledata:Vehicle={
    UserId:0,
    ManufacturerName:'',
    Model:'',
    License:'',
    PurchaseDate:new Date(1000, 0, 0, 0, 0, 0, 0) ,
    RegistrationNumber:'',
    EngineNumber:'',
    ChassisNumber:'',
    TypeOfVehicle:''
  }

  constructor(private router:Router,private activateroute:ActivatedRoute, private vehicleservice:VehicleService) { }

  ngOnInit(): void {
    const tid=this.activateroute.snapshot.paramMap.get('id')
    this.id=Number(tid)
       
  }
  saveVehicle(vehicle:Vehicle){
    this.vehicledata=vehicle
    this.vehicledata.UserId=this.id
    console.log(this.vehicledata)
    this.vehicleservice.addVehicle(this.vehicledata).subscribe(()=>{
      alert("Vehicle added")
      this.router.navigate(['Login/'+this.id+'/Vregister/'+this.vehicledata.RegistrationNumber+'/'+this.vehicledata.Model+'/Plan'])  
    })
 
  }
}



