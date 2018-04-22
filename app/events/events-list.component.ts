import  {Component} from '@angular/core'
@Component({
    selector: 'events-list',
    templateUrl:'app/events/events-list.component.html'
})
export  class EventsListComponent{

    events = [

        {
            "@context": "http://www.schema.org",
            "@type": "Event",
            "name": "CSS",
            "color": "blue",
            "url": "http://www.example.com/launch-party",
            "description": "We're excited to announce the launch party for our newest app!",
            "startDate": "10/05/2015 12:00PM",
            "endDate": "10/05/2015 02:00PM",
            "cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCoAs9tOFJTU2hbc7Oxh3fhiUaELjdavwiuAVgV_xCvFfci7vZ",
            "instructor": "https://avatars0.githubusercontent.com/u/4623017?s=400&v=4",
            "instructor_link": "https://bootsnipp.com/mouse0270",

            "location": {
                "@type": "Place",
                "name": "Joe's Party Palace",
                "sameAs": "http://www.example.com",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "100 Main Street",
                    "addressLocality": "Seattle",
                    "addressRegion": "WA",
                    "postalCode": "98101",
                    "addressCountry": "USA"
                }
            },
            "offers": {
                "@type": "Offer",
                "description": "an offer description",
                "url": "http://www.example.com",
                "price": "$9.99"
            }
        },


    {
        "@context": "http://www.schema.org",
        "@type": "Event",
        "name": "Javascript",
        "color": "yellow",
        "url": "http://www.example.com/launch-party",
        "description": "We're excited to announce the launch party for our newest app!",
        "startDate": "10/05/2015 12:00PM",
        "endDate": "10/05/2015 02:00PM",
        "cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpAWfDxcUfHncVJzVnW3doKcaMMXIyLKorEZdT8TRZ4N7fd8dklQ",
        "instructor": "https://secure.gravatar.com/avatar/509c36a417ef03347b6ca453e712c2b2?s=100&r=g&d=mm",
        "instructor_link": "https://bootsnipp.com/mouse0270",

        "location": {
            "@type": "Place",
            "name": "Joe's Party Palace",
            "sameAs": "http://www.example.com",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "100 Main Street",
                "addressLocality": "Seattle",
                "addressRegion": "WA",
                "postalCode": "98101",
                "addressCountry": "USA"
            }
        },
        "offers": {
            "@type": "Offer",
            "description": "an offer description",
            "url": "http://www.example.com",
            "price": "$9.99"
        }
    },


        {
            "@context": "http://www.schema.org",
            "@type": "Event",
            "color": "orange",
            "name": "HTML",
            "url": "http://www.example.com/launch-party",
            "description": "We're excited to announce the launch party for our newest app!",
            "startDate": "10/05/2015 12:00PM",
            "endDate": "10/05/2015 02:00PM",
            "cover": "https://is3-ssl.mzstatic.com/image/thumb/Purple118/v4/63/a0/32/63a03212-5028-9970-8809-e71bb8fac270/AppIcon-1x_U007emarketing-sRGB-85-220-5.png/1200x630bb.jpg",
            "instructor": "https://avatars0.githubusercontent.com/u/4623017?s=400&v=4",
            "instructor_link": "https://bootsnipp.com/mouse0270",

            "location": {
                "@type": "Place",
                "name": "Joe's Party Palace",
                "sameAs": "http://www.example.com",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "100 Main Street",
                    "addressLocality": "Seattle",
                    "addressRegion": "WA",
                    "postalCode": "98101",
                    "addressCountry": "USA"
                }
            },
            "offers": {
                "@type": "Offer",
                "description": "an offer description",
                "url": "http://www.example.com",
                "price": "$9.99"
            }
        }
]

    Subscribe(event){
        alert(event.name)
    }
}