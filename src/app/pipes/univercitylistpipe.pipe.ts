import { Pipe, PipeTransform } from '@angular/core';
import { Univercity } from '../models/univercity';

@Pipe({
  name: 'univercitylistpipe'
})
export class UnivercitylistpipePipe implements PipeTransform {

  transform(value: Univercity[], filterText:string): Univercity[] {
    filterText=filterText?filterText.toLocaleLowerCase():""
    return filterText?value.filter((c:Univercity)=>c.univercityName.toLocaleLowerCase().indexOf(filterText)!==-1 
  //  || c.univercityRector.toLocaleLowerCase().indexOf(filterText)!==-1
    ):value;
  }

}
