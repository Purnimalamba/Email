import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import {configuration} from './config'; 
import 'rxjs/RX';
@Injectable()
export class MyServiceService {

  constructor(public GitHttp : Http  , public url:configuration) { }
PostUser(form){
  let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
 
    
    return this.GitHttp.post(this.url.UrlObj.verifyUser, form, headers).map((res: Response) => res.json());
  
}

getuser(form){
  console.log(form);
  let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
   
    
    return this.GitHttp.post(this.url.UrlObj.getuser, form, headers).map((res: Response) => res.json());
  
}


}
