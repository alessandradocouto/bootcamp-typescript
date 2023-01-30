export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name;
  }

  getAccountNumber = (): number => {
    return this.accountNumber;
  }

  setStatus = (status: boolean): void => {
    this.status = status;
    console.log('Status alterado com sucesso!')
  }

  getStatus = (): boolean => {
    return this.status;
  }

  setBalance = (balance: number): void => {
    this.balance = balance;
    console.log('Saldo alterado com sucesso!')
  }

  getBalance = (): number => {
    return this.balance;
  }

  deposit = (value: number): void => {
    if( this.validateStatus() ){
      // mudanca saldo
      this.balance += value;
      this.setBalance(this.balance);
      console.log('Voce depositou', value);
      console.log('Seu saldo', this.getBalance());
    }
  }

  withdraw = (value: number): void => {
    // mudanca saldo
    if( this.validateStatus() && this.balance > value ){

      this.balance -= value;
      this.setBalance(this.balance);
      
      console.log('Voce sacou', value);
      console.log('Seu saldo', this.getBalance());
    }
    else{
      console.log('Não há saldo disponível.');
    }
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
