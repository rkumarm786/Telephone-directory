export class FilterObject {
    private _name:string;
    private _mobile:number;

    set mobile(mobile:number){
        this._mobile = mobile>=0?mobile:null;
    }
    set name(name:string){
        this._name = name ? name.trim().toLowerCase() : null;
    }

    get name(){
        return this._name;
    }
    get mobile(){
        return this._mobile;
    }
}