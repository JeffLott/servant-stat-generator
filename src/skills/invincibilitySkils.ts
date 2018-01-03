import { ActiveSkill, ActiveSkillTarget, DescribedLevel } from "../models/skill";
import { SkillIcon } from "../models/skillIcon";

export class ObscurantWallOfChalk extends ActiveSkill{
    public constructor(){
        super("Obscurant Wall of Chalk", SkillIcon.Invincible, "Increase NP for one ally.\r\nApply Invincible (1 turn).", 9, ActiveSkillTarget.AnyAlly);

        for(let i = 10; i >= 1; i--){
            this._levels.push(this.getSkillLevel(i));
        }
    }

    private getSkillLevel(level: number) : DescribedLevel{
        let npAmount = 9 + level;

        return <DescribedLevel>{
            levelDescription: `Increase NP for one ally by ${npAmount}%.\r\nApply Invincible (1 turn).`
        };
    }
}