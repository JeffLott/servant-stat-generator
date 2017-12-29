import { Servant } from "../models/servant";
import { Defender } from "../models/defender";

export interface AttackUpSkillLevel{
    getAttackUpModifier(defender: Defender) : number;
}

export interface DamageUpSkillLevel{
    getDamageUpModifier() : number;
}

export interface QuickEffeciencySkillLevel{
    getQuickModifier() : number;
}

export interface BusterEffeciencySkillLevel{
    getBusterModifier() : number;
}

export interface ArtsEffeciencySkillLevel{
    getArtsModifier() : number;
}