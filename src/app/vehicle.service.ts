import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError,throwError } from 'rxjs';
import { Vehicle } from './vehicle';


@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  url='http://localhost:10095/api/Vehicle/'
  
  httpOptions={headers:new HttpHeaders({'Content-type':'application/json'})}
  constructor(private httpClient:HttpClient) { }
 
   addVehicle(vehicle:Vehicle):Observable<Vehicle>{
     return this.httpClient.post<Vehicle>(this.url+'BuyInsurance',vehicle,this.httpOptions).pipe(catchError(this.HandleError))
   }
  //  getvehicle(registration_number:string):Observable<Vehicle>{
  //   return this.httpClient.get<Vehicle>(this.url+'Get/'+registration_number).pipe(catchError(this.HandleError))
  //  }
 
   HandleError(error:HttpErrorResponse){
     let errormessage=''
     errormessage=error.status+'\n'+error.statusText+error.error;
     alert(errormessage)
    return throwError(errormessage)
   }
  }