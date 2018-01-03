import { ActiveSkill, ActiveSkillTarget, DescribedLevel } from "../models/skill";
import { SkillIcon } from "../models/skillIcon";
import { NpGenerationSkillLevel } from "../interfaces/npGenerationSkillLevel";

export class ShieldOfRousingResolution extends ActiveSkill{
    public constructor(){
        super("Shield of Rousing Resolution", SkillIcon.FocusTarget, "Increase your NP Gain (1 turn).\r\nApply Target Focus to self (1 turn).", 8, ActiveSkillTarget.Self);

        for(let i = 10; i >= 1; i--){
            this._levels.push(new RousingShieldSkill(180 + (20 * i)));
        }
    }

}

class RousingShieldSkill implements DescribedLevel , NpGenerationSkillLevel{
    private _npGenerationAmount : number;

    public constructor(npGenerationAmount : number){
        this._npGenerationAmount = npGenerationAmount / 100;
        this.levelDescription = `Increase your NP Gain by ${npGenerationAmount} (1 turn).\r\nApply Target Focus to self (1 turn).`;
    }
    
    getGenerationUpAmount(): number {
        return this._npGenerationAmount;
    }

    levelDescription: string;
}