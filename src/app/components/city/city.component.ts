import { Component, OnInit } from '@angular/core';
import { CityModel } from 'src/app/models/cityModel';
import { CityService } from 'src/app/services/city.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  constructor(private cityService:CityService) { }

  cities:CityModel[];
  cityFilter="";
  ngOnInit(): void {
    this.getUnivercityDetails();
  }

  getUnivercityDetails(){
    this.cityService.getCity().subscribe((response)=>{
      this.cities=response.data;
    })
  }
}

