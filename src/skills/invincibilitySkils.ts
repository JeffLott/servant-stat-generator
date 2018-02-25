import { ActiveSkill, SkillLevel, EffectTarget} from "../models/skill";
import { SkillIcon } from "../models/skillIcon";
import { Target } from "../models/target";
import { Effect, EffectType } from "../models/effects";

export class ObscurantWallOfChalk extends ActiveSkill{
    public constructor(){
        super("Obscurant Wall of Chalk", SkillIcon.Invincible, "Increase NP for one ally.\r\nApply Invincible (1 turn).", 9);

        for(let i = 1; i <= 10; i++){
            this._levels.push(this.getSkillLevel(i));
        }
    }

    private getSkillLevel(level: number) : SkillLevel{
        let npAmount = 9 + level;

        return new SkillLevel(`Increase NP for one ally by ${npAmount}%.\r\nApply Invincible (1 turn).`, Target.AnyAlly,
            new EffectTarget(Target.AnyAlly, new Effect(EffectType.Invincibility, 0)),
            new EffectTarget(Target.AnyAlly, new Effect(EffectType.NpCharge, npAmount))
        );
    }
}