import { Skill } from "../models/skill";
import { SkillIcon } from "../models/skillIcon";

export class SkillIconHelper{
    static getSkillIcon(skill: Skill) : string{
        let base = "./resources/Skill-Icons/";

        switch(skill.icon){
            case SkillIcon.DefenseUp:
                return base + 'Skill_Icon_Defense_Up.png';
            case SkillIcon.FocusTarget:
                return base + 'Skill_Icon_Taunt.png';
            case SkillIcon.Invincible:
                return base + 'Skill_Icon_Invul.png';
            case SkillIcon.MagicResistance:
                return base + 'Skill_Icon_Magic_Resistance.png';
            case SkillIcon.Riding:
                return base + "Skill_Icon_Riding.png";
        }

        return '';
    }
}