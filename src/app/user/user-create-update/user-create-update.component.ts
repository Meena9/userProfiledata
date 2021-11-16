import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-user-create-update',
  templateUrl: './user-create-update.component.html',
  styleUrls: ['./user-create-update.component.scss']
})
export class UserCreateUpdateComponent implements OnInit {
  isEdit:boolean=false;
  isSingle:boolean=false;
  buttonTitle:string="create"
  title:string="create user"
  userForm= this.formBuilder.group({   
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    pincode: ['', [Validators.required, Validators.minLength(6)]],
    addresss: ['', Validators.required],
    phone: ['', Validators.required,Validators.pattern("[0-9 ]{10}")]
});
submitted: boolean=false;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _apiService:ApiService,
    private formBuilder: FormBuilder
  ) { }
 

paramId:any=""
  ngOnInit(): void {

    this._route.params.subscribe((params) => {
      let routeUrl: string = this._router.url;

      if (routeUrl.indexOf("user/edit") !== -1) {
        this.isEdit = true;
        this.paramId=params["id"]
        this.buttonTitle="update";
        this.title="update user"
        this.getdata(this.paramId)
      }
      if (routeUrl.indexOf("user/single") !== -1) {
         this.isSingle = true;
         this.title="Single user data"
        const Id=params["id"]
        this.getdata(Id)
      }

    });
  }
  getdata(id:any){
    const url=`/${id}`
   this._apiService.commonGetAll(url).subscribe(res=>{
     this.userForm.patchValue({
      firstName: res.data.first_name,
    lastName: res.data.last_name,
    email: res.data.email ,
    pincode: "262523",
    addresss: "shant bazar",
    phone:"8958107987"
     })
  
},(error)=>{
  this._router.navigate(["/user-not-found"]);
}
)
  }

  get f() { return this.userForm.controls; }
  onSubmit(){
    this.submitted = true;

    if(!this.isEdit){

      this._apiService.commonPost(this.userForm.value,"").subscribe(res=>{

      },error=>{
        alert(error)
      })
    }
    if(this.isEdit && this.paramId){
      const url=`/${this.paramId}`
      this._apiService.commonPut(this.userForm.value,url).subscribe(res=>{

      },error=>{
        alert(error)
      })
    }
  }
  onReset() {
    this.submitted = false;
    this.userForm.reset();
}
}
