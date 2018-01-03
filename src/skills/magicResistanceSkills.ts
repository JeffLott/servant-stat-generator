import { PassiveSkill, DescribedLevel } from "../models/skill";
import { SkillIcon } from "../models/skillIcon";

export class MagicResistanceA extends PassiveSkill{
    public constructor(){
        super("Riding (Rank C)", SkillIcon.Riding, "Increase your Quick Card effectiveness by 6%", <DescribedLevel>{
            levelDescription: "Increase your Quick Card effectiveness by 6%"
        });
    }
}