enum Gender {
    Male = "male",
    Female = "female",
}

enum BloodGroup {
    APositive = "A+",
    ANegative = "A-",
    BPositive = "B+",
    BNegative = "B-",
    ABPositive = "AB+",
    ABNegative = "AB-",
    OPositive = "O+",
    ONegative = "O-",
}

enum CardType {
    Maestro = "maestro",
    Mastercard = "mastercard",
    VisaElectron = "visa-electron",
    AmericanExpress = "americanexpress",
    DinersClubCarteBlanche = "diners-club-carte-blanche",
    JCB = "jcb",
    Bankcard = "bankcard",
    InstaPayment = "instapayment",
    Solo = "solo",
    Switch = "switch",
}

enum HairColor {
    Black = "Black",
    Blond = "Blond",
    Brown = "Brown",
    Chestnut = "Chestnut",
    Auburn = "Auburn",

}

enum HairType {
    Strands = "Strands",
    Curly = "Curly",
    VeryCurly = "Very curly",
    Wavy = "Wavy",
    Straight = "Straight",

}

interface Hair {
    color: HairColor;
    type: HairType;
}

interface Address {
    address: string;
    city: string;
    coordinates: {
        lat: number;
        lng: number;
    };
    postalCode: string;
    state: string;
}

interface Bank {
    cardExpire: string;
    cardNumber: string;
    cardType: CardType;
    currency: string;
    iban: string;
}

interface Company {
    address: Address;
    department: string;
    name: string;
    title: string;
}

interface Crypto {
    coin: string;
    wallet: string;
    network: string;
}

interface User {
    id: number;
    firstName: string;
    lastName: string;
    maidenName: string;
    age: number;
    gender: Gender;
    email: string;
    phone: string;
    username: string;
    password: string;
    birthDate: string;
    image: string;
    bloodGroup: BloodGroup;
    height: number;
    weight: number;
    eyeColor: string;
    hair: Hair;
    domain: string;
    ip: string;
    address: Address;
    macAddress: string;
    university: string;
    bank: Bank;
    company: Company;
    ein: string;
    ssn: string;
    userAgent: string;
    crypto: Crypto;
}

export default interface UsersData {
    users: User[];
    total: number;
    skip: number;
    limit: number;
}