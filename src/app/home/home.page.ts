import { Component, ElementRef, ViewChild } from '@angular/core';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  @ViewChild('map') mapRef : ElementRef;

  google: any;


  map: google.maps.Map;
  myposition: google.maps.LatLng;

  ionViewWillEnter(){
   
    this.loadMap();
    this.getMyCords();
    
  
  }

  loadMap(): void{
   
    this.map = new google.maps.Map(this.mapRef.nativeElement, {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
    console.log("loadMap()");
    
    this.getMyCords();
  }

  goPosition(latlng: any){
    this.map.setCenter(latlng);
    this.map.setZoom(15);


    new google.maps.Marker({
      position: latlng,
      map: this.map,
      title: "Hello World!",
    });

  }

  getMyCords(){
   
    this.geolocation.getCurrentPosition().then((resp) => {
   
    this.myposition = new google.maps.LatLng(resp.coords.latitude,resp.coords.longitude);
    
    let lat: any = resp.coords.latitude ;
    let lng: any = resp.coords.longitude;

     const myLatlng = { lat: lat, lng: lng };


    this.goPosition(myLatlng);

    }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

  constructor(private geolocation: Geolocation) {}

}
