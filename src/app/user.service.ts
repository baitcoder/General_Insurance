import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  url='http://localhost:10095/api/User/'

  httpOptions={headers:new HttpHeaders({'Content-type':'application/json'})}
    constructor(private httpclient:HttpClient) { }

    registerUser(customer:User):Observable<User>{
      return this.httpclient.post<User>(this.url+'Register',customer,this.httpOptions).pipe(catchError(this.handleError));
    }

    
    userlogin(id:number,pass:string):Observable<User>{
      return this.httpclient.get<User>(this.url+'Login/'+id+'/'+pass,this.httpOptions).pipe(catchError(this.handleError));
    }

    getUserID(email:string):Observable<string>{
      return this.httpclient.get<string>(this.url+'GetUserId/'+email,this.httpOptions).pipe(catchError(this.handleError));
    }
    // userCheck(id:number,pass:string): Observable<User>{
    //   return this.httpclient.get<User>(this.url+'Login/'+id+'/'+pass,this.httpOptions).pipe(catchError(this.handleError));
    // }
    // getUser(email:string):Observable<Customer>{
    //   return this.httpclient.get<Customer>(this.url+"Get/"+email).pipe(catchError(this.handleError))
    // }
    //  editUser(email:string,password:string):Observable<Customer>{
    //   return this.httpclient.put<Customer>(this.url+"Reset/"+email+"/"+password,this.httpOptions).pipe(catchError(this.handleError))
    // }
    handleError(error:HttpErrorResponse){
      let errorMessage='';
      errorMessage=error.status+'\n'+error.statusText+'\n'+error.error;
      alert(errorMessage);
      return throwError(errorMessage)
    }
}
