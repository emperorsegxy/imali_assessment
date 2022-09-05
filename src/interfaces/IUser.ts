export default interface IUser {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    date: Date;
    KYCStatus: boolean;
    image: string;
    lastTransaction: ITransaction;
    id: string | number;
}

interface ITransaction {
    amount: string;
    date: Date;
    voucherNo: string;
    status: 'pending' | 'successful' | 'failed'
}
