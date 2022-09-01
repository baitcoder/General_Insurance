import { Injectable } from '@angular/core';
import { Plan } from './plan';
import { AppModule } from './app.module';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PlanService {

  newurl='http://localhost:10095/api/Plan/'
  httpOptions={headers:new HttpHeaders({'Content-type':'application/json'})}

  constructor(private httpClient:HttpClient) { }
  
  addPlan(plan:Plan):Observable<Plan>{
    return this.httpClient.post<Plan>(this.newurl+'AddPlan',plan,this.httpOptions).pipe(catchError(this.HandleError))
  }
  getPlans(id:Number):Observable<any>{
    return this.httpClient.get<any[]>(this.newurl+'Get/'+id,this.httpOptions).pipe(catchError(this.HandleError))
  }




  HandleError(error:HttpErrorResponse){
    let errormessage=''
    errormessage=error.status+'\n'+error.statusText+error.error;
    alert(errormessage)
   return throwError(errormessage)
  }
}
