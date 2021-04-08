import { Pipe, PipeTransform } from '@angular/core';
import { UnivercityDetail } from '../models/univercityDetailModel';

@Pipe({
  name: 'univercity'
})
export class UnivercityPipe implements PipeTransform {

  transform(value: UnivercityDetail[], filterText:string): UnivercityDetail[] {
    filterText=filterText?filterText.toLocaleLowerCase():""
    return filterText?value.filter((c:UnivercityDetail)=>c.univercityName.toLocaleLowerCase().indexOf(filterText)!==-1 
  //  || c.univercityRector.toLocaleLowerCase().indexOf(filterText)!==-1
    ):value;
  }

}
