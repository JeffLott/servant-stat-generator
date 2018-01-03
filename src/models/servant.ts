import { ServantClass } from "./class";
import { Deck } from "./deck";
import { Traits } from "./traits";
import { Attribute } from "./attributes";
import { Defender } from "./defender";
import { PassiveSkill, ActiveSkillContainer } from "./skill";

export abstract class Servant extends Defender{
    private _name : string;
    private _attack : number;
    private _deck : Deck;
    private _starGen : number;
    private _npGenAttack : number;
    private _npGenDefense : number;
    protected _aliases : Array<string>;
    protected _passiveSkills : Array<PassiveSkill>;
    protected _activeSkills : Array<ActiveSkillContainer>;

    constructor(name: string, servantClass : ServantClass, attack : number, deck: Deck, 
        starGen : number, npGenAttack : number, npGenDefense: number, traits : Traits[], attribute: Attribute){
        super(servantClass, traits, attribute);
        
        this._name = name;;
        this._attack = attack;
        this._deck = deck;
        this._starGen = starGen;
        this._npGenAttack = npGenAttack;
        this._npGenDefense = npGenDefense;
        this._passiveSkills = new Array<PassiveSkill>();
        this._activeSkills = new Array<ActiveSkillContainer>();
        this._aliases = new Array<string>();
    }

    public get name() : string {
        return this._name;
    }

    public get Attack() : number{
        return this._attack;
    }

    public get Deck() : Deck{
        return this._deck;
    }

    public get StarGen() : number{
        return this._starGen;
    }

    public get NpGenAttack() : number{
        return this._npGenAttack;
    }

    public get NpGenDefense() : number{
        return this._npGenDefense;
    }

    public get PassiveSkills() : PassiveSkill[]{
        return this._passiveSkills;
    }

    public get ActiveSkills() : ActiveSkillContainer[]{
        return this._activeSkills;
    }

    public get Aliases(): string[]{
        return this._aliases;
    }
}

export enum ServantIdentity{
    Mashu,
    Arturia
}