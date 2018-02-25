import { SkillIcon } from "./skillIcon";
import { Effect } from "./effects";
import { Target } from "./target";

export abstract class Skill{
    private _name : string;
    private _icon : SkillIcon;
    private _description : string;

    public constructor(name: string, icon: SkillIcon, description: string){
        this._name = name;
        this._icon = icon;
        this._description = description;
    }

    public get name() : string{
        return this._name;
    }

    public get icon() : SkillIcon{
        return this._icon;
    }

    public get description() : string{
        return this._description;
    }
}

export abstract class PassiveSkill extends Skill{
    private _effect : Effect;

    public constructor(name: string, icon : SkillIcon, description: string, effect: Effect){
        super(name, icon, description);

        this._effect = effect;
    }

    public get effect() : Effect{
        return this._effect;
    }
}

export abstract class ActiveSkill extends Skill{
    private _baseCoolDown : number;
    protected _levels : Array<SkillLevel>;
    
    public constructor(name: string, icon : SkillIcon, description : string, baseCooldown : number){
        super(name, icon, description);

        this._baseCoolDown = baseCooldown;
        this._levels = new Array<SkillLevel>();
    }

    public get baseCooldown() : number{
        return this._baseCoolDown;
    }

    public get levels() : SkillLevel[]{
        return this._levels;
    }
}

export class ActiveSkillContainer{
    private _options : ActiveSkill[];

    public constructor(...skillOptions: ActiveSkill[]){
        this._options = skillOptions;
    }

    public get skillOptions() : ActiveSkill[]{
        return this._options;
    }
}

export class SkillLevel {
    private readonly _description : string;
    private readonly _target : Target;
    private readonly _effects: Array<EffectTarget>;

    public constructor(description: string, target: Target, ...effects: Array<EffectTarget>){
        this._description = description;
        this._target = target;
        this._effects = effects;
    }

    public get description(): string{
        return this._description;
    }

    public get target(): Target{
        return this._target;
    }

    public get effects(): EffectTarget[]{
        return this._effects;
    }
}

export class EffectTarget{
    private readonly _target : Target;
    private readonly _effect : Effect;

    public constructor(target: Target, effect: Effect){
        this._target = target;
        this._effect = effect;
    }

    public get target() : Target{
        return this._target;
    }

    public get effect() :Effect{
        return this._effect;
    }
}