import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { PeopleCiaAccount } from './class/PeopleCiaAccount';

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Ale', 10)
console.log(peopleAccount);
peopleAccount.deposit(30);
peopleAccount.deposit(10);
peopleAccount.withdraw (60);
peopleAccount.withdraw (10);

const companyAccount: CompanyAccount = new CompanyAccount('Udemy', 20)
companyAccount.setStatus(true);
console.log(companyAccount);
companyAccount.getLoan(100);
companyAccount.getLoan(50);
console.log(companyAccount.deposit(30));

console.log('------------------')

const companyAccount2: CompanyAccount = new CompanyAccount('Alura', 10)
companyAccount2.setStatus(false);
console.log(companyAccount2);
companyAccount2.getLoan(100);

companyAccount2.setStatus(true);
console.log(companyAccount2);
companyAccount2.getLoan(50);


const peopleCiaAccount: PeopleCiaAccount = new PeopleCiaAccount('Coursera', 30);
console.log(peopleCiaAccount);
peopleCiaAccount.deposit(100);