import { Servant } from "../models/servant";
import { CardType } from "../models/cardType";
import { CardPosition } from "../models/cardPosition";
import { Combatant } from "../models/combatant";
import { DamageMultiplierService } from "./damageMultiplierService";
import { ClassAdvantageService } from "./classAdvantageService";
import { AttributeService } from "./attributeService";
import { ChainType } from "../models/chainType";
import { Effect, EffectType } from "../models/effects";

export class DamageCalculatorService{
    private _damageMultiplier : DamageMultiplierService;
    private _classAdvantage : ClassAdvantageService;
    private _attributeService : AttributeService;

    public constructor(damageMultiplier : DamageMultiplierService, classAdvantage: ClassAdvantageService, attributeService: AttributeService){
        this._damageMultiplier = damageMultiplier;
        this._classAdvantage = classAdvantage;
        this._attributeService = attributeService;
    }

    public getCardDamage(servant: Servant, defender: Combatant, cardType: CardType, position: CardPosition, isFirstBuster: boolean, chainType: ChainType, effects: Effect[]) : number{
        let cardMultiplier = (isFirstBuster || chainType == ChainType.Buster ? .5 : 0) + (this.getCardDamageValue(cardType, position) * this.getCardModifier(cardType, effects));
        let damage = servant.attack * .23;

        damage *= cardMultiplier;
        damage *= this._damageMultiplier.getClassModifier(servant.servantClass);
        damage *= this._classAdvantage.getModifier(servant.servantClass, defender.servantClass);
        damage *= this._attributeService.getAttributeModifier(servant, defender);
        damage *= this.getAttackUpModifier(effects, defender);

        if(cardType == CardType.Extra && position == CardPosition.Extra){
            if(chainType == ChainType.Brave){
                damage *= 2;
            }
            else if(chainType == ChainType.Arts || chainType == ChainType.Buster || chainType == ChainType.Quick){
                damage *= 3;
            }
        }

        damage += this.getAdditionalDamage(effects);

        if(chainType == ChainType.Buster){
            damage += (.2 * servant.attack);
        }

        return Math.round(damage);
    }

    public getAdditionalDamage(activeEffects: Effect[]) : number{
        let damage = 0;

        for(let effect of activeEffects){
            if(effect.type == EffectType.DamageUp){
                damage += effect.modifier;
            }
        }

        return damage;
    }

    public getCardModifier(cardType: CardType, activeEffects: Effect[]) : number{
        let modifier = 1.0;

        for(let effect of activeEffects){
            if(cardType == CardType.Arts && effect.type == EffectType.ArtsUp){
                modifier += effect.modifier;
            }
            else if(cardType == CardType.Buster && effect.type == EffectType.BusterUp){
                modifier += effect.modifier;
            }
            if(cardType == CardType.Quick && effect.type == EffectType.QuickUp){
                modifier += effect.modifier;
            }
        }

        return modifier;
    }

    public getAttackUpModifier(activeEffects: Effect[], defender : Combatant) : number{
        let modifier = 1.0;

        for(let effect of activeEffects){
            if(effect.type == EffectType.AttackUp){
                modifier += effect.modifier;
            }
        }

        return modifier;
    }

    public getCardDamageValue(cardType: CardType, position : CardPosition) : number{
        switch(cardType){
            case CardType.Arts:
                switch(position){
                    case CardPosition.First:
                        return 1.0;
                    case CardPosition.Second:
                        return 1.2;
                    case CardPosition.Third:
                        return 1.4;
                }
            case CardType.Buster:
                switch(position){
                    case CardPosition.First:
                        return 1.5;
                    case CardPosition.Second:
                        return 1.8;
                    case CardPosition.Third:
                        return 2.1;
                }
            case CardType.Quick:
                switch(position){
                    case CardPosition.First:
                        return .8;
                    case CardPosition.Second:
                        return .96;
                    case CardPosition.Third:
                        return 1.12;
                }
            default:
                return 1;
        }
    }
}