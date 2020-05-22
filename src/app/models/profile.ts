export class Profile {
    firstname: string;
    lastname: string;
    email: {
        address: string;
        verified: boolean
    };
    phone: {
        number: string;
        verified: boolean;
    }
    username: string;
    password: string;
    gamertag: string;
}