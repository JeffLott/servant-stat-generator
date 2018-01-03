import { Defender } from "../models/defender";
import { SkillLevel } from "../models/skill";

export interface AttackUpSkillLevel extends SkillLevel{
    getAttackUpModifier(defender: Defender) : number;
}

export interface DamageUpSkillLevel extends SkillLevel{
    getDamageUpModifier() : number;
}

export interface QuickEffeciencySkillLevel extends SkillLevel{
    getQuickModifier() : number;
}

export interface BusterEffeciencySkillLevel extends SkillLevel{
    getBusterModifier() : number;
}

export interface ArtsEffeciencySkillLevel extends SkillLevel{
    getArtsModifier() : number;
}