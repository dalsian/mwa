class BaseObject  {

    width:number = 0;
    length:number = 0;

    constructor(width, length) {
        this.width = width;
        this.length = length;
    }
}

class Rectangle extends BaseObject {
    constructor(width, length) {
        super(width, length);
    }
    calSize():number {
        return this.width * this.length;
    }
}

const rec = new Rectangle(5,2);
console.log(rec.calSize());