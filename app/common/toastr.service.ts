import {Injectable} from "@angular/core";
declare let toastr:any
@Injectable()
 export class ToastrService{
    fire(type:string,message:string,title?:string){
        toastr[type](message,title)
    }
 }