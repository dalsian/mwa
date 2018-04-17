class Car {

    private _name:string;
    private _acceleration:number = 0;

    public constructor(name:string) {
        this._name = name;
    }

    public honk() {
        console.log(`${this._name} is saying: hooonk.`);
    }

    public accelerate(speed:number): void {
        this._acceleration += speed;
    }

    public get acceleration() {
        return this._acceleration;
    }
    public set acceleration(acc:number) {
        this._acceleration = acc;
    }
    public get name() {
        return this._name;
    }
    public set name(n:string) {
        this._name = n;
    }
}

let car:Car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(60);
console.log(car.acceleration);