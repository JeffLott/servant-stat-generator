import { SkillIcon } from "../models/skillIcon";
import { SkillLevel, EffectTarget, ActiveSkill } from "../models/skill";
import { Target } from "../models/target";
import { Effect, EffectType } from "../models/effects";

export class TransientWallOfSnowflakes extends ActiveSkill{
    public constructor(){
        super("Transient Wall of Snowflakes", SkillIcon.DefenseUp, "Increase all allies' DEF (3 turns)", 7);

        for(let i = 1; i <= 10; i++){
            this._levels.push(this.getSkillLevel(i));
        }
    }

    private getSkillLevel(level: number) : SkillLevel{
        let def = .095 + (.005 * level);

        return new SkillLevel(`Increase all allies DEF by ${(def * 100).toFixed(1)}% for 3 turns.`, Target.AllAllies, new EffectTarget(Target.AllAllies, new Effect(EffectType.DefenseUp, def)));
    }
}

export class ExaltedImperviousWallOfSnowflakes extends ActiveSkill{
    public constructor(){
        super("Exalted Impervious Wall of Snowflakes", SkillIcon.DefenseUp, "Increase all allies' DEF (3 turns)<br/>Apply Damage Cut [2000] to all allies (1 hit)", 7);

        for(let i = 1; i <= 10; i++){
            this._levels.push(this.getSkillLevel(i));
        }
    }

    private getSkillLevel(level: number) : SkillLevel{
        let def = .145 + (.005 * level);

        return new SkillLevel(`Increase all allies DEF by ${def * 100}% for 3 turns.<br/>Apply Damage Cut [2000] to all allies (1 hit).`, 
            Target.AllAllies,
             new EffectTarget(Target.AllAllies, new Effect(EffectType.DefenseUp, def)), 
             new EffectTarget(Target.AllAllies, new Effect(EffectType.DamageCut, 2000))
        );
    }
}