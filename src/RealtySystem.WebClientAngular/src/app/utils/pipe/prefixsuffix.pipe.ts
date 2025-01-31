import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'prefixSuffix'
})
export class PrefixSuffixPipe implements PipeTransform {
    transform(value: any, prefix: string = '', suffix: string = ''): string {
        if (!value) return ''; // Handle null or undefined value
        return `${prefix} ${value} ${suffix}`;
    }
}
