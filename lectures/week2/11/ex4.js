"use strict";
var Person = /** @class */ (function () {
    function Person() {
        this._firstName = "";
        this.enumerable = true;
        this.configurable = true;
    }
    Object.defineProperty(Person.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (name) {
            this._firstName = name;
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
var p = new Person();
p.firstName = "Assad";
console.log(p.firstName);
