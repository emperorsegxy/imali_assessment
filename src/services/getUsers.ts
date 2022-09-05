import OliviaAvatar from "../assets/images/olivia.svg";
import PhoenixAvatar from "../assets/images/phoenix.svg";
import CandiceAvatar from "../assets/images/candice.svg";
import IUser from "../interfaces/IUser";

export default function getUsers (): IUser[] {
    return [
        {
            id: '3066',
            firstName: 'Olivia',
            lastName: 'Rhye',
            image: OliviaAvatar,
            phone: '09087765467',
            email: 'olivia.rhye@gmail.com',
            KYCStatus: true,
            date: new Date(),
            lastTransaction: {
                amount: 'NGN 24,000',
                date: new Date(),
                status: 'successful',
                voucherNo: '00437E'
            }
        },
        {
            id: '3067',
            firstName: 'Phoenix',
            lastName: 'Baker',
            image: PhoenixAvatar,
            phone: '09087765467',
            email: 'olivia.rhye@gmail.com',
            KYCStatus: true,
            date: new Date(),
            lastTransaction: {
                amount: 'NGN 27,000',
                date: new Date(),
                status: 'successful',
                voucherNo: '60921V'
            }
        },
        {
            id: '3068',
            firstName: 'James',
            lastName: 'Warri',
            image: '',
            phone: '09087765467',
            email: 'olivia.rhye@gmail.com',
            KYCStatus: true,
            date: new Date(),
            lastTransaction: {
                amount: 'NGN 24,000',
                date: new Date(),
                status: 'successful',
                voucherNo: '00437E'
            }
        },
        {
            id: '3069',
            firstName: 'Demi',
            lastName: 'Wilkinson',
            image: '',
            phone: '09087765467',
            email: 'olivia.rhye@gmail.com',
            KYCStatus: true,
            date: new Date(),
            lastTransaction: {
                amount: 'NGN 24,000',
                date: new Date(),
                status: 'successful',
                voucherNo: '00437E'
            }
        },
        {
            id: '3070',
            firstName: 'Candice',
            lastName: 'Wu',
            image: CandiceAvatar,
            phone: '09087765467',
            email: 'olivia.rhye@gmail.com',
            KYCStatus: true,
            date: new Date(),
            lastTransaction: {
                amount: 'NGN 24,000',
                date: new Date(),
                status: 'successful',
                voucherNo: '00437E'
            }
        }
    ]
}
