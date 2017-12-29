import { Servant } from "../models/servant";
import { Defender } from "../models/defender";
import { Attribute } from "../models/attributes";

export class AttributeService{
    public getAttributeModifier(attacker: Servant, defender: Defender) : number{
        let modifier = 1;

        if(attacker.Attribute == Attribute.Earth){
            if(defender.Attribute == Attribute.Man){
                modifier = 1.1;
            }
            else if(defender.Attribute == Attribute.Sky){
                modifier = .9;
            }
        }
        else if(attacker.Attribute == Attribute.Man){
            if(defender.Attribute == Attribute.Sky){
                modifier = 1.1;
            }
            else if(defender.Attribute == Attribute.Earth){
                modifier = .9;
            }
        }
        else if(attacker.Attribute == Attribute.Sky){
            if(defender.Attribute == Attribute.Earth){
                modifier = 1.1;
            }
            else if(defender.Attribute == Attribute.Man){
                modifier = .9;
            }
        }
        else if(attacker.Attribute == Attribute.Star){
            if(defender.Attribute == Attribute.Beast){
                modifier = 1.1;
            }
        }

        return modifier;
    }
}