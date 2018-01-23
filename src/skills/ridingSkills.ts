import { PassiveSkill } from "../models/skill";
import { SkillIcon } from "../models/skillIcon";
import { Effect, EffectType } from "../models/effects";

export class RidingC extends PassiveSkill{
    public constructor(){
        super("Riding (Rank C)", SkillIcon.Riding, "Increase your Quick Card effectiveness by 6%", new Effect(EffectType.QuickUp, .06));
    }
}