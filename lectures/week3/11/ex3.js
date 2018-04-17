"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BaseObject = /** @class */ (function () {
    function BaseObject(width, length) {
        this.width = 0;
        this.length = 0;
        this.width = width;
        this.length = length;
    }
    return BaseObject;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, length) {
        return _super.call(this, width, length) || this;
    }
    Rectangle.prototype.calSize = function () {
        return this.width * this.length;
    };
    return Rectangle;
}(BaseObject));
var rec = new Rectangle(5, 2);
console.log(rec.calSize());
