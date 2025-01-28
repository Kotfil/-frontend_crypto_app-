import {IconName} from "@fortawesome/fontawesome-svg-core";

export interface TransactionIcons {
    name?: string;
}

export interface Transaction {
    type: string;
    amount: number;
    name: string;
    description: string;
    date: string;
    userName: string | null;
    percent: string | null;
    iconType: IconName | null | string;
}

export interface CardData {
    cardBalance: {
        limit: number;
        balance: number;
    };
    noPaymentDue: boolean;
    dailyPoints: number;
    transactions: Transaction[];
}
