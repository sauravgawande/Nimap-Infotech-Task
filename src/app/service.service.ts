import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
UserId!:any


  constructor(private http:HttpClient) { }


  //create new user form
  postData(userId:any,data:any){
  this.UserId = userId
    return this.http.post("http://localhost:3000/previewData",data)
  }


  //get user data by id
  getDataById(){
    return this.http.get(`http://localhost:3000/previewData/${this.UserId}`)
  }



  //upddate user info by id
  updateUserData(id:any,data:any){

return this.http.put(`http://localhost:3000/previewData/${id}`,data)
  }
  
}
