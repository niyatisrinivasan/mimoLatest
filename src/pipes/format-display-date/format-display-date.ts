import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'formatDisplayDate',
})

export class FormatDisplayDatePipe implements PipeTransform {
  
  transform(value, args) {
    let dateApplied = value.DateApplied
    let dateFormat = moment(dateApplied).format('DD MMM YYYY');
    return dateFormat;
  }
}
