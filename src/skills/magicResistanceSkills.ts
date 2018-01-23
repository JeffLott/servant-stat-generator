import { PassiveSkill} from "../models/skill";
import { SkillIcon } from "../models/skillIcon";
import { Effect, EffectType } from "../models/effects";

export class MagicResistanceA extends PassiveSkill{
    public constructor(){
        super("Magic Resistance (Rank A)", SkillIcon.MagicResistance, "Increase your Debuff Resist by 20%.", new Effect(EffectType.DebuffResistance, .2));
    }
}