import { Injectable } from '@angular/core';

export type ComparisonOperator = 'eq' | 'neq' | 'gt' | 'gte' | 'lt' | 'lte' | 'contains' | 'startsWith' | 'in';
export type MatchType = 'all' | 'any';

export interface FieldFilters<T> {
    operator: ComparisonOperator;
    value: any;
}

export interface FilterCriterion<T> {
    field: keyof T;
    filters: FieldFilters<T>[];
    fieldMatchType: MatchType;
}

type GenericObject = { [key: string]: any };

@Injectable({
    providedIn: 'root'
})
export class GenericService {
    constructor() {}

    /**
     * Filters an array of objects based on multiple fields, their corresponding comparison operators, and match type.
     *
     * @param array - The array of objects to filter.
     * @param criteria - An array of filter criteria containing field, operator, and value.
     * @param matchType - The type of matching logic ('all' for every criterion, 'any' for at least one criterion).
     * @returns A filtered array of objects.
     */
    filterWithOperators<T extends GenericObject>(array: T[], criteria: FilterCriterion<T>[], matchType: MatchType = 'all'): T[] {
        return array.filter((item) => {
            const matches = criteria.map(({ field, filters, fieldMatchType }) => {
                const filterMatches = filters.map(({ operator, value }) => {
                    const fieldValue: any = item[field];
                    switch (operator) {
                        case 'eq':
                            return fieldValue === value;
                        case 'neq':
                            return fieldValue !== value;
                        case 'gt':
                            return fieldValue > value;
                        case 'gte':
                            return fieldValue >= value;
                        case 'lt':
                            return fieldValue < value;
                        case 'lte':
                            return fieldValue <= value;
                        case 'contains':
                            return typeof fieldValue === 'string' && fieldValue.includes(value);
                        case 'startsWith':
                            return typeof fieldValue === 'string' && fieldValue.startsWith(value);
                        case 'in':
                            return typeof fieldValue === 'string' && value.includes(fieldValue);
                        default:
                            return false;
                    }
                });

                return fieldMatchType === 'all' ? filterMatches.every(Boolean) : filterMatches.some(Boolean);
            });

            return matchType === 'all' ? matches.every(Boolean) : matches.some(Boolean);
        });
    }
}
