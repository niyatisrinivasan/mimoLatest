import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the LimitCharactersPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'limitCharacters',
})
export class LimitCharactersPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value, args) {
    let limit = args ? parseInt(args, 70) : 70;
    let trail = '...';

    return value.length > limit ? value.substring(0, limit) + trail : value;
  }
}
