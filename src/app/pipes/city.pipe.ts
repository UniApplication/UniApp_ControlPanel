import { Pipe, PipeTransform } from '@angular/core';
import { CityModel } from '../models/cityModel';

@Pipe({
  name: 'city'
})
export class CityPipe implements PipeTransform {

  transform(value: CityModel[], filterText:string): CityModel[] {
    filterText=filterText?filterText.toLocaleLowerCase():""
    return filterText?value.filter((c:CityModel)=>c.cityName.toLocaleLowerCase().indexOf(filterText)!==-1 
    ):value;
  }

}
