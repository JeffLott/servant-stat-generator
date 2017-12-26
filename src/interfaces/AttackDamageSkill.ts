import { Servant } from "../models/servant";
import { Defender } from "../models/defender";

interface AttackDamageSkill{
    getModifier(attacker : Servant, defender: Defender) : number;
}