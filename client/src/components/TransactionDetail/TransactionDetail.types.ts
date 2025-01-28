
export interface Transaction {
    type: string;
    amount: number;
    name: string;
    description: string;
    date: string;
    authorizedUser: string | null;
    status: string;
}
