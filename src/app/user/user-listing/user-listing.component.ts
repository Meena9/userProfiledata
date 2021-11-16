import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.scss']
})
export class UserListingComponent implements OnInit {

  page = 1;
  pageSize = 0;
  ListSize = 0;;
  userList:Array<any>=[];
  

  constructor(private _apiService:ApiService) {
   
  }

 

  ngOnInit(): void {
    this.paginationData();
  }
  paginationData() {
    let url=`?page=`+this.page
    
  this._apiService.commonGetAll(url).subscribe(response=>{
    this.userList=response.data;
    this.ListSize=response.total;
    this.pageSize=response.per_page;
  })
  }

  deletedata(id:any){
    const url=`/${id}`
    this._apiService.commonDelete(url).subscribe(res=>{
      this.page=1
      this.paginationData()
    })
  }
}
