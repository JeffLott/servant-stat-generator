export class Skill{
    private _name : string;

    public constructor(name: string){
        this._name = name;
    }

    public get Name() : string{
        return this._name;
    }
}