export class Person {
    private _name:string;
    private _mobile:number;
    private _age:number;
    private _address:string;
    private _email:string;

    constructor(name,mobile,age,address,email){
        this._name=name;
        this._mobile=mobile;
        this._age=age;
        this._address=address;
        this._email=email;
    }
    
    get name(): string {
        return this._name;
    }
    get mobile(): number {
        return this._mobile;
    }
    get age(): number {
        return this._age;
    }
    get address(): string {
        return this._address;
    }
    get email(): string {
        return this._email;
    }

    set name(name:string) {
        this._name = name;
    }
    set mobile(mobile:number) {
        this._mobile=mobile;
    }
    set age(age:number) {
        this._age=age;
    }
    set address(address:string) {
        this._address=address;
    }
    set email(email:string) {
        this._email=email;
    }
}
