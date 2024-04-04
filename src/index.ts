class Account {
    // readonly id: number;
    // owner: string;
    // private _balance: number;
    nickname?: string;

    constructor (public readonly id: number, public owner : string, private _balance: number) {
        //this.id = id;
        //this.owner = owner;
        //this._balance = balance;
    }

    deposit(amount: number): void {
        if (amount <= 0)
            throw new Error('Invalid amount');
        this._balance += amount; 
    }

    getBalance () {
        return this._balance
    }

    /*private method () {
        return this.owner
    }*/

}


let account = new Account(1, 'dong', 0 )
account.deposit(100)
console.log(account.owner)

console.log(account.getBalance()) // but through getBalance() method you can call this.balance private properties

console.log(typeof account)
console.log(account instanceof Account)



