import {Injectable} from "@angular/core";

@Injectable()
export class EventsService{

    getEvents(){
        return EVENTS
    }
}
const EVENTS =  [
    {
        "going": false,
        "@context": "http://www.schema.org",
        "@type": "Event",
        "color": "orange",
        "name": "HTML mohamed",
        "url": "http://www.example.com/launch-party",
        "description": "With HTML you can create your own Website. This tutorial teaches you everything about HTML. HTML is easy to learn - You will enjoy it.",
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
    },
    {
        "going": false,
        "@context": "http://www.schema.org",
        "@type": "Event",
        "name": "CSS",
        "color": "blue",
        "url": "http://www.example.com/launch-party",
        "description": "CSS is a language that describes the style of an HTML document. CSS describes how HTML elements should be displayed. This tutorial will teach you CSS from basic to advanced.",
        "startDate": "10/05/2015 12:00PM",
        "endDate": "10/05/2015 02:00PM",
        "cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCoAs9tOFJTU2hbc7Oxh3fhiUaELjdavwiuAVgV_xCvFfci7vZ",
        "instructor": "https://avatars0.githubusercontent.com/u/4623012?s=400&v=4",
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
        "going": false,
        "@context": "http://www.schema.org",
        "@type": "Event",
        "name": "Javascript",
        "color": "yellow",
        "url": "http://www.example.com/launch-party",
        "description": "JavaScript is the programming language of HTML and the Web. JavaScript is easy to learn. This tutorial will teach you JavaScript from basic to advanced.",
        "startDate": "10/05/2015 12:00PM",
        "endDate": "10/05/2015 02:00PM",
        "cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpAWfDxcUfHncVJzVnW3doKcaMMXIyLKorEZdT8TRZ4N7fd8dklQ",
        "instructor": "https://randomuser.me/api/portraits/men/42.jpg",
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



]