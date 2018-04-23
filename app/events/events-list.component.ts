import  {Component,OnInit} from '@angular/core'
import {EventsService} from "./shared/events.service";
@Component({
    selector: 'events-list',
    templateUrl:'app/events/events-list.component.html'
})
export  class EventsListComponent implements  OnInit{
    events:any[]
    constructor(private eventService: EventsService) {

    }
    ngOnInit(){
        this.events = this.eventService.getEvents();
    }

    Subscribe(event){
        alert(event.name)
    }
}