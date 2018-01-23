export class Effect{
    private _type : EffectType;
    private _modifier : number;

    public constructor(type : EffectType, modifier : number){
        this._modifier = modifier;
        this._type = type;
    }

    public get type(): EffectType{
        return this._type;
    }

    public get modifier() : number{
        return this._modifier;
    }
}

export enum EffectType{
    AttackUp,
    DamageUp,
    ArtsUp,
    BusterUp,
    QuickUp,
    DefenseUp,
    DamageCut,
    NpGain,
    FocusTarget,
    NpCharge,
    Invincibility,
    DebuffResistance
}