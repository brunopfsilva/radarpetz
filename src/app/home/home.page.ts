import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  @ViewChild('map') mapRef : ElementRef;

  google: any;


  map: google.maps.Map;

  ionViewWillEnter(){
   
    this.loadMap();

  
  }

  loadMap(): void{
   
    this.map = new google.maps.Map(this.mapRef.nativeElement, {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
    console.log("loadMap()");
    

  }

  constructor() {}

}
