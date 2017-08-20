export class Transaction {


    carId: number;
    customerUsername: string;
    transactionType: number;
    amountToPaid: number;



    constructor(carId: number, customerUsername: string, transactionType: number, amountToPaid: number) {
        this.carId = carId;
        this.customerUsername = customerUsername;
        this.transactionType = transactionType;
        this.amountToPaid = amountToPaid;
    }
}