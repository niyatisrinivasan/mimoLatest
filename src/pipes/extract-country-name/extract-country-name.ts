import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'extractCountryName',
})
export class ExtractCountryNamePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value, args) {
    console.log(value)
    //derive each country 
    let countryName = value.CountryName
    console.log(countryName)
    return countryName;
  }
}