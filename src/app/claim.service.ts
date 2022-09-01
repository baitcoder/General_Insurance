import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Claim } from './claim';
import { Claimstatus } from './claimstatus';



@Injectable({
  providedIn: 'root'
})

export class ClaimService {
  url='http://localhost:10095/api/Claim/'
  httpOptions={headers:new HttpHeaders({'Content-type':'application/json'})}
    constructor(private httpclient:HttpClient) { }

  claim(claim:Claim):Observable<Claim>{
    return this.httpclient.post<Claim>(this.url+"AddClaim",claim,this.httpOptions).pipe(catchError(this.handleError));
  }
 
  edit(claimId:number):Observable<Claim>{
    return this.httpclient.delete<Claim>(this.url + "Edit/"+claimId,this.httpOptions).pipe(catchError(this.handleError));
  }
  getClaimList():Observable<any>{
    return this.httpclient.get<any[]>(this.url+'ClaimList').pipe(catchError(this.handleError))
  }
  approveClaimTable(id:number):Observable<Claimstatus>{
    return this.httpclient.put<Claimstatus>(this.url+'Approve/'+id,this.httpOptions).pipe(catchError(this.handleError))
    
  }
  handleError(error:HttpErrorResponse){
    let errorMessage='';
    errorMessage=error.status+'\n'+error.statusText+'\n'+error.error;
    alert(errorMessage);
    return throwError(errorMessage)
  }

}



