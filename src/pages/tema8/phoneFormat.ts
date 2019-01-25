import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'phone'
})

export class PhonePipe implements PipeTransform {
  transform(phoneNumberString, args) {
    const cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{4})(\d{3})(\d{3})$/);

    if (match) {
      return '(' + match[1] + ') ' + match[2] + ' ' + match[3]
    }

    return null
  }
}
