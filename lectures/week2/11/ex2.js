"use strict";
var Car = /** @class */ (function () {
    function Car(name) {
        this._acceleration = 0;
        this._name = name;
    }
    Car.prototype.honk = function () {
        console.log(this._name + " is saying: hooonk.");
    };
    Car.prototype.accelerate = function (speed) {
        this._acceleration += speed;
    };
    Object.defineProperty(Car.prototype, "acceleration", {
        get: function () {
            return this._acceleration;
        },
        set: function (acc) {
            this._acceleration = acc;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (n) {
            this._name = n;
        },
        enumerable: true,
        configurable: true
    });
    return Car;
}());
var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(60);
console.log(car.acceleration);
