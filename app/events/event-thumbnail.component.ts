import {Component, EventEmitter, Input, Output} from '@angular/core'

@Component({
    selector: 'events-thumbnail',
    templateUrl:'app/events/events-thumbnail.component.html',
    styleUrls:['app/events/events.thumbnail.component.css']

})
export  class EventsThumbnailComponent{
    @Input() event:any
    @Output() eventClick = new EventEmitter()

    Subscribe(event){
        this.eventClick.emit(event)
    }
}