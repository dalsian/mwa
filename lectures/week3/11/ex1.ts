let bankAccount: {money:number, deposit:(value:number)=>void} = {
    money : 2000,
    deposit(value:number): void {
        this.money += value;
    }
}

let myself:{name:string, bankAccount:{money:number, deposit:(value:number)=>void}, hobbies:string[]} = {
    name: "Asaad",
    bankAccount: bankAccount,
    hobbies: ["violin","cookie"]
}

myself.bankAccount.deposit(3000);
console.log(myself);