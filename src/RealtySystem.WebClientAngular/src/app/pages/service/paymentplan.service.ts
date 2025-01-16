import {Injectable} from '@angular/core';

export interface MilestoneFee {
    name?: string | null;
    description?: string | null;
    fixedAmount?: number | null;
    rate?: number | null;
    isRecurring?: boolean;
    frequency?: number | null;
}

export interface Milestone {
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

@Injectable({
    providedIn: 'root'
})
export class PaymentplanService {

    getData(): PaymentPlan[] {
        return [
            {
                id: '1',
                name: "Payment Plan 1",
                description: "",
                milestones: [
                    {
                        name: "Booking",
                        description: "",
                        remarks: "",
                        order: 1,
                        totalPercent: 10.00,
                        frequency: 1,
                        frequencyIntervalType: "month",
                        frequencyInterval: 1,
                        percentPerFrequency: 10,
                        ordinalCountFromFrequency: "start",
                        fees: [
                            {
                                name: "Municipality Fee",
                                description: "",
                                fixedAmount: 0,
                                rate: 4,
                                isRecurring: false,
                                frequency: 1
                            },
                            {
                                name: "Oqood Fee",
                                description: "",
                                fixedAmount: 3000,
                                rate: 0,
                                isRecurring: false,
                                frequency: 1
                            },
                        ]
                    },
                    {
                        name: "Installment",
                        description: "",
                        remarks: "",
                        order: 2,
                        totalPercent: 11.00,
                        frequency: 11,
                        frequencyIntervalType: "month",
                        frequencyInterval: 1,
                        percentPerFrequency: 1,
                        ordinalCountFromFrequency: "continue",
                        fees: []
                    },
                    {
                        name: "Installment",
                        description: "",
                        remarks: "",
                        order: 3,
                        totalPercent: 5.00,
                        frequency: 1,
                        frequencyIntervalType: "month",
                        frequencyInterval: 1,
                        percentPerFrequency: 5,
                        ordinalCountFromFrequency: "continue",
                        fees: [
                            {
                                name: "Admin Fee",
                                description: "",
                                fixedAmount: 3000,
                                rate: 0,
                                isRecurring: false,
                                frequency: 1
                            },
                        ]
                    },
                    {
                        name: "Installment",
                        description: "",
                        remarks: "",
                        order: 4,
                        totalPercent: 24.00,
                        frequency: 24,
                        frequencyIntervalType: "month",
                        frequencyInterval: 1,
                        percentPerFrequency: 1,
                        ordinalCountFromFrequency: "continue",
                        fees: []
                    },
                    {
                        name: "Post-Handover",
                        description: "",
                        remarks: "",
                        order: 5,
                        totalPercent: 50,
                        frequency: 8,
                        frequencyIntervalType: "month",
                        frequencyInterval: 3,
                        percentPerFrequency: 6.25,
                        ordinalCountFromFrequency: "continue",
                        fees: []
                    },
                ],
            },
            {
                id: '2',
                name: "Payment Plan 2",
                description: ""
            },
            {
                id: '3',
                name: "Payment Plan 3",
                description: ""
            },
            {
                id: '4',
                name: "Payment Plan 4",
                description: ""
            },
            {
                id: '5',
                name: "Payment Plan 5",
                description: ""
            },
        ];
    }

    getPaymentPlans() {
        return Promise.resolve(this.getData());
    }

    constructor() {
    }
}
