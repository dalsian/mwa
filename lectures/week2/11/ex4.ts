class Person {
    private _firstName:string = "";

    public get firstName():string {
        return this._firstName;
    }

    public set firstName(name:string) {
        this._firstName = name;
    }
    enumerable = true;
    configurable = true
}   
let p:Person = new Person();
p.firstName = "Assad";
console.log(p.firstName);