import { DioAccount } from "./DioAccount";

export class PeopleCiaAccount extends DioAccount {

    constructor(name: string, accountNumber: number){
        super(name, accountNumber);
    }

    deposit = (value: number): void => {
        const total = value + 10;
        console.log('Você depositou no total', total);
    }

}