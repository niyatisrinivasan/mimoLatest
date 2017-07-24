import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'extractSalaryInfo',
})

export class ExtractSalaryInfoPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value, args) {
    console.log(value)
    let currencyCode = value.Currency.CurrencyCode
    let currencySymbol = value.Currency.Symbol
    let salaryTo = value.SalaryTo
    let salaryFrom = value.SalaryFrom

    let salary = currencyCode + currencySymbol + salaryFrom + " - " + currencyCode + currencySymbol + salaryTo
    return salary;
  }
}
