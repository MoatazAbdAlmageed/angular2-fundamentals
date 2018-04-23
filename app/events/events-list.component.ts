import  {Component,OnInit} from '@angular/core'
import {EventsService} from "./shared/events.service";
import {ToastrService} from "../common/toastr.service";

@Component({
    selector: 'events-list',
    templateUrl:'app/events/events-list.component.html'
})
export  class EventsListComponent implements  OnInit{
    events:any[]
    constructor(private eventService: EventsService,private toastrService: ToastrService) {

    }
    ngOnInit(){
        this.events = this.eventService.getEvents();

    }

    Subscribe(event){

        event.going = !event.going;
        this.toastrService.fire('success',"You are going "+event.name)

    }
}