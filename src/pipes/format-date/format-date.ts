import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'format-date',
})

export class FormatDatePipe implements PipeTransform {
 
  transform(value, args) {
    let date = value.date
    let dateFormat = moment(date).format('YYYY-MM-DD');
    return dateFormat;
  }
}
