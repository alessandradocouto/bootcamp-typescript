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
exports.PeopleCiaAccount = void 0;
var DioAccount_1 = require("./DioAccount");
var PeopleCiaAccount = /** @class */ (function (_super) {
    __extends(PeopleCiaAccount, _super);
    function PeopleCiaAccount(name, accountNumber) {
        var _this = _super.call(this, name, accountNumber) || this;
        _this.deposit = function (value) {
            var total = value + 10;
            console.log('Você depositou no total', total);
        };
        return _this;
    }
    return PeopleCiaAccount;
}(DioAccount_1.DioAccount));
exports.PeopleCiaAccount = PeopleCiaAccount;
