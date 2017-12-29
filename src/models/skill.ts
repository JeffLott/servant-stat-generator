export class Skill{
    private _name : string;
    private _icon : SkillIcon;

    public constructor(name: string, icon: SkillIcon){
        this._name = name;
        this._icon = icon;
    }

    public get Name() : string{
        return this._name;
    }

    public get Icon() : SkillIcon{
        return this._icon;
    }
}

export enum SkillIcon{

}

export class SkillLevel{
    private _level : number;

    public constructor(level: number){
        this._level = level;
    }

    public get level() : number{
        return this._level;
    }
}