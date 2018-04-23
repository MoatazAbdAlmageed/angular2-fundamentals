import  {NgModule} from '@angular/core'
import  {BrowserModule} from '@angular/platform-browser'
import  {EventsAppComponent} from './event-app.component'
import {EventsListComponent} from "./events/events-list.component";
import {EventsThumbnailComponent} from "./events/event-thumbnail.component";
import {NavbarComponent} from "./nav/navbar.component";
import {EventsService} from "./events/shared/events.service";

@NgModule({
    imports: [BrowserModule],
    declarations:[
        EventsAppComponent,
        EventsListComponent,
        EventsThumbnailComponent,
        NavbarComponent
    ],
    providers:[EventsService],
    bootstrap:[EventsAppComponent],
})
export  class AppModule{

}