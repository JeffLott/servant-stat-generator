import { ServantClass } from "../models/class";

export class DamageMultiplierService{
    public getClassModifier(servantClass : ServantClass) : number{
        switch(servantClass){
            case ServantClass.Assassin:
            case ServantClass.Caster:
                return .9;
            case ServantClass.Archer:
                return .95;
            case ServantClass.Lancer:
                return 1.05;
            case ServantClass.Avenger:
            case ServantClass.Berserker:
            case ServantClass.Ruler:
                return 1.1;
            default:
                return 1.0;
        }
    }
}