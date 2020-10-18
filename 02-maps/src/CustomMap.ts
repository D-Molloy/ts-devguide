import { User } from './User'
import { Company } from './Company'


// Instructions to every other class on how they can be an argument to addMarker
// exporting so that we can use the `implements` keyword on the class definitions to see the errors sooner
export interface Mappable {
    location: {
        lat: number,
        lng: number
    }
    markerContent(): string;
    color: string
}


export class CustomMap {
    // stating that googleMap will be an instance of the google.map.Map class
    // public - anything outside this class can reference google map
    // private - can't access this class directly from outside the class
    private googleMap: google.maps.Map
    constructor(elementId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(elementId), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0,
            },
        });
    }
    addMarker(mappable: Mappable): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        })
        marker.addListener("click", () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent()
            })
            infoWindow.open(this.googleMap, marker)
        })
    }
}