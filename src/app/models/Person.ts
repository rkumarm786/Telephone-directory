export class Person {
    public _id:number;
    public _name:string;
    public _mobile:number;
    public _age:number;
    public _address:string;
    public _email:string;

    constructor(id,name,mobile,age,address,email){
        this._id=id;
        this._name=name;
        this._mobile=mobile;
        this._age=age;
        this._address=address;
        this._email=email;
    }
    
    get id(): number {
        return this._id;
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
