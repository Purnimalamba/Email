import { Component, OnInit } from '@angular/core';
import {MyServiceService} from '../my-service.service';
// import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( public MyService:MyServiceService) { }
login=1;
register=0;
midPage=0;
loginPage=0;
user;
Login(form){
console.log(form.value);
this.MyService.getuser(form.value).subscribe(res=>{
  
    this.user=res.respData.data.name;
      
    console.log(this.user);
    this.loginPage=1;
    this.login=0;
     
  })

}


Register(){
this.register=1;
this.login=0;
}

OnRegister(form){
console.log(form.value);
this.midPage=1;
this.register=0;
  this.MyService.PostUser(form.value).subscribe(res=>{
    
    
     
  })


}
  ngOnInit() {
  }

}
