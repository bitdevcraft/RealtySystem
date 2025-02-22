import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

export interface MilestoneFee {
    id?: string | null;
    name?: string | null;
    description?: string | null;
    fixedAmount?: number | null;
    rate?: number | null;
    isRecurring?: boolean;
    frequency?: number | null;
}

export interface Milestone {
    id?: string | null;
    name?: string | null;
    description?: string | null;
    remarks?: string | null;
    order?: number | null;
    totalPercent?: number | null;
    frequency?: number | null;
    frequencyIntervalType?: string | null;
    frequencyInterval?: number | null;
    percentPerFrequency?: number | null;
    ordinalCountFromFrequency?: string | null;
    fees?: MilestoneFee[];
}

export interface PaymentPlan {
    id?: string | null;
    name?: string | null;
    description?: string | null;
    milestones?: Milestone[];
}

export interface SchedulePlan {
    name?: string | null;
    percentage?: number | null;
    price?: number | null;
    dueDate?: Date | null;
    remarks?: string | null;
}

export interface Fee {
    name?: string | null;
    price?: number | null;
    remarks?: string | null;
}

export interface PaymentPlanPicklist {
    source: PaymentPlan[];
    target: PaymentPlan[];
}

@Injectable({
    providedIn: 'root'
})
export class PaymentplanService {
    getData(): PaymentPlan[] {
        return [
            {
                id: '1',
                name: 'Payment Plan 1',
                description: '',
                milestones: [
                    {
                        id: '1',
                        name: 'Booking',
                        description: 'Downpayment',
                        remarks: '',
                        order: 1,
                        totalPercent: 10.0,
                        frequency: 1,
                        frequencyIntervalType: 'month',
                        frequencyInterval: 0,
                        percentPerFrequency: 10,
                        ordinalCountFromFrequency: 'start',
                        fees: [
                            {
                                id: 'Fee-1',
                                name: 'Municipality Fee',
                                description: '',
                                fixedAmount: 0,
                                rate: 4,
                                isRecurring: false,
                                frequency: 1
                            },
                            {
                                id: 'Fee-2',
                                name: 'Oqood Fee',
                                description: '',
                                fixedAmount: 3000,
                                rate: 0,
                                isRecurring: false,
                                frequency: 1
                            }
                        ]
                    },
                    {
                        id: '2',
                        name: 'Installment',
                        description: '',
                        remarks: '',
                        order: 2,
                        totalPercent: 11.0,
                        frequency: 11,
                        frequencyIntervalType: 'month',
                        frequencyInterval: 1,
                        percentPerFrequency: 1,
                        ordinalCountFromFrequency: 'continue',
                        fees: []
                    },
                    {
                        id: '3',
                        name: 'Installment',
                        description: '',
                        remarks: '',
                        order: 3,
                        totalPercent: 5.0,
                        frequency: 1,
                        frequencyIntervalType: 'month',
                        frequencyInterval: 1,
                        percentPerFrequency: 5,
                        ordinalCountFromFrequency: 'continue',
                        fees: [
                            {
                                id: 'Fee-3',
                                name: 'Admin Fee',
                                description: '',
                                fixedAmount: 3000,
                                rate: 0,
                                isRecurring: false,
                                frequency: 1
                            }
                        ]
                    },
                    {
                        id: '4',
                        name: 'Installment',
                        description: '',
                        remarks: '',
                        order: 4,
                        totalPercent: 24.0,
                        frequency: 24,
                        frequencyIntervalType: 'month',
                        frequencyInterval: 1,
                        percentPerFrequency: 1,
                        ordinalCountFromFrequency: 'continue',
                        fees: []
                    },
                    {
                        id: '5',
                        name: 'Post-Handover',
                        description: '',
                        remarks: '',
                        order: 5,
                        totalPercent: 50,
                        frequency: 8,
                        frequencyIntervalType: 'month',
                        frequencyInterval: 3,
                        percentPerFrequency: 6.25,
                        ordinalCountFromFrequency: 'continue',
                        fees: []
                    }
                ]
            },
            {
                id: '2',
                name: 'Payment Plan 2',
                description: '',
                milestones: [
                    {
                        id: '1',
                        name: 'Downpayment',
                        description: '',
                        remarks: '',
                        order: 1,
                        totalPercent: 10.0,
                        frequency: 1,
                        frequencyIntervalType: 'month',
                        frequencyInterval: 1,
                        percentPerFrequency: 10.0,
                        ordinalCountFromFrequency: 'start',
                        fees: [
                            {
                                id: 'Fee-3',
                                name: 'Municipality Fee',
                                description: '4% + 40',
                                fixedAmount: 40,
                                rate: 4,
                                isRecurring: false,
                                frequency: 1
                            }
                        ]
                    },
                    {
                        id: '2',
                        name: 'After 3 Months',
                        description: '',
                        remarks: '',
                        order: 2,
                        totalPercent: 10.0,
                        frequency: 1,
                        frequencyIntervalType: 'month',
                        frequencyInterval: 3,
                        percentPerFrequency: 10.0,
                        ordinalCountFromFrequency: 'continue',
                        fees: []
                    },
                    {
                        id: '3',
                        name: 'Installment',
                        description: '',
                        remarks: '',
                        order: 3,
                        totalPercent: 22.0,
                        frequency: 22,
                        frequencyIntervalType: 'month',
                        frequencyInterval: 3,
                        percentPerFrequency: 1.0,
                        ordinalCountFromFrequency: 'continue',
                        fees: []
                    },
                    {
                        id: '4',
                        name: 'Handover',
                        description: '',
                        remarks: '',
                        order: 4,
                        totalPercent: 10.0,
                        frequency: 1,
                        frequencyIntervalType: 'month',
                        frequencyInterval: 1,
                        percentPerFrequency: 10.0,
                        ordinalCountFromFrequency: 'continue',
                        fees: []
                    },
                    {
                        id: '5',
                        name: 'Post-Handover',
                        description: '',
                        remarks: '',
                        order: 5,
                        totalPercent: 48.0,
                        frequency: 48,
                        frequencyIntervalType: 'month',
                        frequencyInterval: 1,
                        percentPerFrequency: 1.0,
                        ordinalCountFromFrequency: 'continue',
                        fees: []
                    }
                ]
            },
            {
                id: '3',
                name: 'Payment Plan 3',
                description: '',
                milestones: []
            },
            {
                id: '4',
                name: 'Payment Plan 4',
                description: '',
                milestones: []
            },
            {
                id: '5',
                name: 'Payment Plan 5',
                description: '',
                milestones: []
            }
        ];
    }

    private apiUrl = 'api/paymentPlans';

    constructor(private http: HttpClient) {}

    getPaymentPlans(params: HttpParams) {
        return this.http.get<PaymentPlan[]>(this.apiUrl, { params, observe: 'response' });
    }

    getPaymentPlan(id: string) {
        return this.http.get<PaymentPlan>(`${this.apiUrl}/${id}`);
    }

    getPaymentPlanByProject(projectId?: string | null) {
        return forkJoin({
            source: this.http.get<PaymentPlan[]>(this.apiUrl),
            target: this.http.get<PaymentPlan[]>(this.apiUrl)
        }).pipe(
            map((response: { source: PaymentPlan[]; target: PaymentPlan[] }) => {
                let source = response.source;
                let target = response.target.slice(0, 1);
                return {
                    source: source.filter((a) => !target.some((b) => a.id === b.id)),
                    target: target
                };
            })
        );
    }

    generateSchedulePlan(milestones: Milestone[], purchasePrice: number, startDate: Date) {
        const data: SchedulePlan[] = [];
        let date = new Date(startDate);
        milestones.forEach((milestone) => {
            for (let i = 0; i < (milestone.frequency ?? 0); i++) {
                let percentage = (milestone.totalPercent ?? 0) / (milestone.frequency ?? 1);
                let price = purchasePrice * (percentage / 100);
                let remarks = '';
                let name = milestone.name;

                switch (milestone.frequencyIntervalType) {
                    case 'day':
                        date = new Date(date.setDate(date.getDate() + (milestone.frequencyInterval ?? 0)));
                        break;
                    case 'week':
                        date = new Date(date.setDate(date.getDate() + (milestone.frequencyInterval ?? 0) * 7));
                        break;
                    case 'month':
                        date = new Date(date.setMonth(date.getMonth() + (milestone.frequencyInterval ?? 0)));
                        break;
                    case 'year':
                        date = new Date(date.setFullYear(date.getFullYear() + (milestone.frequencyInterval ?? 0)));
                        break;
                    default:
                        break;
                }

                data.push({
                    percentage: percentage,
                    price: price,
                    name: name,
                    remarks: remarks,
                    dueDate: new Date(date)
                });
            }
        });

        return data;
    }

    generateFees(milestones: Milestone[], purchasePrice: number) {
        const data: Fee[] = [];
        milestones.forEach((milestone) => {
            milestone?.fees?.forEach((fee) => {
                let price = 0;
                if (fee.rate) {
                    price += (fee.rate * purchasePrice) / 100;
                }

                if (fee.fixedAmount) {
                    price += fee.fixedAmount;
                }

                data.push({
                    name: fee.name,
                    price: price,
                    remarks: fee.description
                });
            });
        });

        return data;
    }
}
