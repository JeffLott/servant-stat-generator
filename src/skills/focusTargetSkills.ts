import { ActiveSkill, SkillLevel, EffectTarget } from "../models/skill";
import { SkillIcon } from "../models/skillIcon";
import { Target } from "../models/target";
import { Effect, EffectType } from "../models/effects";

export class ShieldOfRousingResolution extends ActiveSkill{
    public constructor(){
        super("Shield of Rousing Resolution", SkillIcon.FocusTarget, "Increase your NP Gain (1 turn).\r\nApply Target Focus to self (1 turn).", 8);

        for(let i = 10; i >= 1; i--){
            this._levels.push(this.getLevel(i));
        }
    }

    private getLevel(level: number) : SkillLevel{
        let npGain = 180 + (20 * level);

        return new SkillLevel(`Increase your NP Gain by ${npGain} (1 turn).\r\nApply Target Focus to self (1 turn).)`, Target.Self, 
            new EffectTarget(Target.Self, new Effect(EffectType.FocusTarget, 0)), 
            new EffectTarget(Target.Self, new Effect(EffectType.NpGain, npGain/100))
        );
    }
}