import { SkillIcon } from "../models/skillIcon";
import { ActiveSkill, ActiveSkillTarget, DescribedLevel } from "../models/skill";

export class TransientWallOfSnowflakes extends ActiveSkill{
    public constructor(){
        super("Transient Wall of Snowflakes", SkillIcon.DefenseUp, "Increase all allies' DEF (3 turns)", 7, ActiveSkillTarget.AllAllies);

        for(let i = 10; i >= 1; i--){
            this._levels.push(this.getSkillLevel(i));
        }
    }

    private getSkillLevel(level: number) : DescribedLevel{
        let def = 9.5 + (.5 * level);

        return <DescribedLevel>{
            levelDescription: `Increase all allies DEF by ${def}% for 3 turns.`
        };
    }
}

export class ExaltedImperviousWallOfSnowflakes extends ActiveSkill{
    public constructor(){
        super("Exalted Impervious Wall of Snowflakes", SkillIcon.DefenseUp, "Increase all allies' DEF (3 turns)\r\nApply Damage Cut [2000] to all allies (1 hit)", 7, ActiveSkillTarget.AllAllies);

        for(let i = 10; i >= 1; i--){
            this._levels.push(this.getSkillLevel(i));
        }
    }

    private getSkillLevel(level: number) : DescribedLevel{
        let def = 14.5 + (.5 * level);

        return <DescribedLevel>{
            levelDescription: `Increase all allies DEF by ${def}% for 3 turns.\r\nApply Damage Cut [2000] to all allies (1 hit)`
        };
    }
}