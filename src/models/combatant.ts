import { Traits } from "./traits";
import { Attribute } from "./attributes";
import { ServantClass } from "./class";

export class Combatant{
    private _class : ServantClass;
    private _traits : Traits[];
    private _attribute : Attribute;

    public constructor(servantClass: ServantClass, traits: Traits[], attribute : Attribute){
        this._class = servantClass;
        this._traits = traits;
        this._attribute = attribute;
    }

    public get servantClass() : ServantClass{
        return this._class;
    } 

    public get traits() : Traits[]{
        return this._traits;
    }

    public get attribute() : Attribute{
        return this._attribute;
    }
}