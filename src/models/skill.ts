import { SkillIcon } from "./skillIcon";

export abstract class Skill{
    private _name : string;
    private _icon : SkillIcon;
    private _description : string;

    public constructor(name: string, icon: SkillIcon, description: string){
        this._name = name;
        this._icon = icon;
    }

    public get Name() : string{
        return this._name;
    }

    public get Icon() : SkillIcon{
        return this._icon;
    }

    public get Description() : string{
        return this._description;
    }
}

export abstract class PassiveSkill extends Skill{
    private _skillLevel : SkillLevel;

    public constructor(name: string, icon : SkillIcon, description: string, skillLevel : SkillLevel){
        super(name, icon, description);

        this._skillLevel = skillLevel;
    }

    public get SkillLevel() : SkillLevel{
        return this._skillLevel;
    }
}

export abstract class ActiveSkill extends Skill{
    private _baseCoolDown : number;
    private _target : ActiveSkillTarget;
    protected _levels : Array<DescribedLevel>;
    
    public constructor(name: string, icon : SkillIcon, description : string, baseCooldown : number, target: ActiveSkillTarget){
        super(name, icon, description);

        this._baseCoolDown = baseCooldown;
        this._target = target;
        this._levels = new Array<DescribedLevel>();
    }

    public get BaseCooldown() : number{
        return this._baseCoolDown;
    }

    public get Levels() : DescribedLevel[]{
        return this._levels;
    }

    public get Target() : ActiveSkillTarget{
        return this._target;
    }
}

export class ActiveSkillContainer{
    private _options : ActiveSkill[];

    public constructor(...skillOptions: ActiveSkill[]){
        this._options = skillOptions;
    }

    public get SkillOptions() : ActiveSkill[]{
        return this._options;
    }
}

export enum ActiveSkillTarget{
    Self,
    AnyAlly,
    AllAllies,
    Enemy,
    AllEnemies
}

export interface SkillLevel{}

export interface DescribedLevel extends SkillLevel{
    readonly levelDescription : string;
}