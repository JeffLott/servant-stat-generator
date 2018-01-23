import { Servant } from "../models/servant";
import { Combatant } from "../models/combatant";
import { Attribute } from "../models/attributes";

export class AttributeService{
    public getAttributeModifier(attacker: Servant, defender: Combatant) : number{
        let modifier = 1;

        if(attacker.attribute == Attribute.Earth){
            if(defender.attribute == Attribute.Man){
                modifier = 1.1;
            }
            else if(defender.attribute == Attribute.Sky){
                modifier = .9;
            }
        }
        else if(attacker.attribute == Attribute.Man){
            if(defender.attribute == Attribute.Sky){
                modifier = 1.1;
            }
            else if(defender.attribute == Attribute.Earth){
                modifier = .9;
            }
        }
        else if(attacker.attribute == Attribute.Sky){
            if(defender.attribute == Attribute.Earth){
                modifier = 1.1;
            }
            else if(defender.attribute == Attribute.Man){
                modifier = .9;
            }
        }
        else if(attacker.attribute == Attribute.Star){
            if(defender.attribute == Attribute.Beast){
                modifier = 1.1;
            }
        }

        return modifier;
    }
}