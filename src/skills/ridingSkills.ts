import { PassiveSkill } from "../models/skill";
import { SkillIcon } from "../models/skillIcon";
import { QuickEffeciencySkillLevel } from "../interfaces/damageSkillLevel";

export class RidingC extends PassiveSkill{
    public constructor(){
        super("Riding (Rank C)", SkillIcon.Riding, "Increase your Quick Card effectiveness by 6%", new RidingSkillLevel(.06));
    }
}

class RidingSkillLevel implements QuickEffeciencySkillLevel{
    private _modifier : number;

    public constructor(modifier: number){
        this._modifier = modifier;
    }
    
    getQuickModifier(): number {
        return this._modifier;
    }
}