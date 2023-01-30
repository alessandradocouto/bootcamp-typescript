import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (value: number): void => {
    if( this.getStatus() ){
      console.log('Voce pegou um empréstimo', value);
      this.setBalance(value + this.getBalance());
      console.log('Seu saldo', this.getBalance());
    }
    else{
      console.log('Seu status é', this.getStatus(), ',logo não foi possível realizar essa operação.');
    }
  }


}
