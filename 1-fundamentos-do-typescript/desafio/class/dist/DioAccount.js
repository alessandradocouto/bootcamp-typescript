"use strict";
exports.__esModule = true;
exports.DioAccount = void 0;
var DioAccount = /** @class */ (function () {
    function DioAccount(name, accountNumber) {
        var _this = this;
        this.balance = 0;
        this.status = true;
        this.getName = function () {
            return _this.name;
        };
        this.getAccountNumber = function () {
            return _this.accountNumber;
        };
        this.setStatus = function (status) {
            _this.status = status;
            console.log('Status alterado com sucesso!');
        };
        this.getStatus = function () {
            return _this.status;
        };
        this.setBalance = function (balance) {
            _this.balance = balance;
            console.log('Saldo alterado com sucesso!');
        };
        this.getBalance = function () {
            return _this.balance;
        };
        this.deposit = function (value) {
            if (_this.validateStatus()) {
                // mudanca saldo
                _this.balance += value;
                _this.setBalance(_this.balance);
                console.log('Voce depositou', value);
                console.log('Seu saldo', _this.getBalance());
            }
        };
        this.withdraw = function (value) {
            // mudanca saldo
            if (_this.validateStatus() && _this.balance > value) {
                _this.balance -= value;
                _this.setBalance(_this.balance);
                console.log('Voce sacou', value);
                console.log('Seu saldo', _this.getBalance());
            }
            else {
                console.log('Não há saldo disponível.');
            }
        };
        this.validateStatus = function () {
            if (_this.status) {
                return _this.status;
            }
            throw new Error('Conta inválida');
        };
        this.name = name;
        this.accountNumber = accountNumber;
    }
    return DioAccount;
}());
exports.DioAccount = DioAccount;
