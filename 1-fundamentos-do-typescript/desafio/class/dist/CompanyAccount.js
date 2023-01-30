"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.CompanyAccount = void 0;
var DioAccount_1 = require("./DioAccount");
var CompanyAccount = /** @class */ (function (_super) {
    __extends(CompanyAccount, _super);
    function CompanyAccount(name, accountNumber) {
        var _this = _super.call(this, name, accountNumber) || this;
        _this.getLoan = function (value) {
            if (_this.getStatus()) {
                console.log('Voce pegou um empréstimo', value);
                _this.setBalance(value + _this.getBalance());
                console.log('Seu saldo', _this.getBalance());
            }
            else {
                console.log('Seu status é', _this.getStatus(), ',logo não foi possível realizar essa operação.');
            }
        };
        return _this;
    }
    return CompanyAccount;
}(DioAccount_1.DioAccount));
exports.CompanyAccount = CompanyAccount;
