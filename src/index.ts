class Account {
    // readonly id: number;
    // owner: string;
    // private _balance: number;
    nickname?: string;

    constructor (
        public readonly id: number, 
        public owner : string, 
        private _balance: number) {
        //this.id = id;
        //this.owner = owner;
        //this._balance = balance;
    }

    deposit(amount: number): void {
        if (amount <= 0)
            throw new Error('Invalid amount');
        this._balance += amount; 
    }

    get balance (): number { // getter is a method inside a class that we use for getting the value of a property
        return this._balance
    }

    set balance (value: number) {
        if (value < 0)
            throw new Error ('Invalid value')
        this._balance = value
    }


    /*private method () {
        return this.owner
    }*/

}


let account = new Account(1, 'dong', 0 )
account.deposit(100)
console.log(account.owner)

console.log(account.balance) // when you do not want to call a method here, so we chang it with 'get' key word and we can access the balance property just like before.
account.balance = 1 // just now we can not assign a value to balance, we need a 'set' kty word.

console.log(typeof account)
console.log(account instanceof Account)



