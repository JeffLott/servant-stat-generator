import { Servant } from "../models/servant";
import { DeckDamageResult } from "../dtos/deckDamageResult";
import { CardType } from "../models/cardType";
import { CardPosition } from "../models/cardPosition";
import { Defender } from "../models/defender";
import { SkillLevel } from "../models/skill";
import { ArtsEffeciencySkillLevel, BusterEffeciencySkillLevel, QuickEffeciencySkillLevel, AttackUpSkillLevel, DamageUpSkillLevel } from '../interfaces/damageSkillLevel';
import { DamageMultiplierService } from "./damageMultiplierService";
import { ClassAdvantageService } from "./classAdvantageService";
import { AttributeService } from "./attributeService";
import { ChainType } from "../models/chainType";

export class DamageCalculatorService{
    private _damageMultiplier : DamageMultiplierService;
    private _classAdvantage : ClassAdvantageService;
    private _attributeService : AttributeService;

    public constructor(damageMultiplier : DamageMultiplierService, classAdvantage: ClassAdvantageService, attributeService: AttributeService){
        this._damageMultiplier = damageMultiplier;
        this._classAdvantage = classAdvantage;
        this._attributeService = attributeService;
    }

    public getDeckDamage(servant: Servant, defender: Defender, activeSkillLevels: SkillLevel[]) : DeckDamageResult{
        let result = new DeckDamageResult();

        this.populateArts(result, servant, defender, activeSkillLevels);
        this.populateBuster(result, servant, defender, activeSkillLevels);
        this.populateExtra(result, servant, defender, activeSkillLevels);
        this.populateQuick(result, servant, defender, activeSkillLevels);

        return result;
    }

    public populateArts(result: DeckDamageResult, servant: Servant, defender: Defender, activeSkillLevels: SkillLevel[]){
        result.artsCount = servant.Deck.ArtsCount;

        result.artsFirstDamage.DamageAvg = this.getCardDamage(servant, defender, CardType.Arts, CardPosition.First, false, ChainType.None, activeSkillLevels);

        result.artsSecondArtsFirst.DamageAvg = this.getCardDamage(servant, defender, CardType.Arts, CardPosition.Second, false, ChainType.None, activeSkillLevels);
        result.artsSecondBusterFirst.DamageAvg = this.getCardDamage(servant, defender, CardType.Arts, CardPosition.Second, true, ChainType.None, activeSkillLevels);
        result.artsSecondQuickFirst.DamageAvg = this.getCardDamage(servant, defender, CardType.Arts, CardPosition.Second, false, ChainType.None, activeSkillLevels);

        result.artsThirdArtsFirst.DamageAvg = this.getCardDamage(servant, defender, CardType.Arts, CardPosition.Third, false, ChainType.None, activeSkillLevels);
        result.artsThirdBusterFirst.DamageAvg = this.getCardDamage(servant, defender, CardType.Arts, CardPosition.Third, true, ChainType.None, activeSkillLevels);
        result.artsThirdQuickFirst.DamageAvg = this.getCardDamage(servant, defender, CardType.Arts, CardPosition.Third, false, ChainType.None, activeSkillLevels);
    }

    public populateQuick(result: DeckDamageResult, servant: Servant, defender: Defender, activeSkillLevels: SkillLevel[]){
        result.quickCount = servant.Deck.QuickCount;

        result.quickFirstDamage.DamageAvg = this.getCardDamage(servant, defender, CardType.Quick, CardPosition.First, false, ChainType.None, activeSkillLevels);

        result.quickSecondArtsFirst.DamageAvg = this.getCardDamage(servant, defender, CardType.Quick, CardPosition.Second, false, ChainType.None, activeSkillLevels);
        result.quickSecondBusterFirst.DamageAvg = this.getCardDamage(servant, defender, CardType.Quick, CardPosition.Second, true, ChainType.None, activeSkillLevels);
        result.quickSecondQuickFirst.DamageAvg = this.getCardDamage(servant, defender, CardType.Quick, CardPosition.Second, false, ChainType.None, activeSkillLevels);

        result.quickThirdArtsFirst.DamageAvg = this.getCardDamage(servant, defender, CardType.Quick, CardPosition.Third, false, ChainType.None, activeSkillLevels);
        result.quickThirdBusterFirst.DamageAvg = this.getCardDamage(servant, defender, CardType.Quick, CardPosition.Third, true, ChainType.None, activeSkillLevels);
        result.quickThirdQuickFirst.DamageAvg = this.getCardDamage(servant, defender, CardType.Quick, CardPosition.Third, false, ChainType.None, activeSkillLevels);
    }

    public populateBuster(result: DeckDamageResult, servant: Servant, defender: Defender, activeSkillLevels: SkillLevel[]){
        result.busterCount = servant.Deck.BusterCount;

        result.busterFirstDamage.DamageAvg = this.getCardDamage(servant, defender, CardType.Buster, CardPosition.First, true, ChainType.None, activeSkillLevels);
        result.busterFirstBusterChain.DamageAvg = this.getCardDamage(servant, defender, CardType.Buster, CardPosition.First, true, ChainType.Buster, activeSkillLevels);

        result.busterSecondArtsFirst.DamageAvg = this.getCardDamage(servant, defender, CardType.Buster, CardPosition.Second, false, ChainType.None, activeSkillLevels);
        result.busterSecondBusterFirst.DamageAvg = this.getCardDamage(servant, defender, CardType.Buster, CardPosition.Second, true, ChainType.None, activeSkillLevels);
        result.busterSecondBusterChain.DamageAvg = this.getCardDamage(servant, defender, CardType.Buster, CardPosition.Second, true, ChainType.Buster, activeSkillLevels);
        result.busterSecondQuickFirst.DamageAvg = this.getCardDamage(servant, defender, CardType.Buster, CardPosition.Second, false, ChainType.None, activeSkillLevels);

        result.busterThirdArtsFirst.DamageAvg = this.getCardDamage(servant, defender, CardType.Buster, CardPosition.Third, false, ChainType.None, activeSkillLevels);
        result.busterThirdBusterFirst.DamageAvg = this.getCardDamage(servant, defender, CardType.Buster, CardPosition.Third, true, ChainType.None, activeSkillLevels);
        result.busterThirdBusterChain.DamageAvg = this.getCardDamage(servant, defender, CardType.Buster, CardPosition.Third, true, ChainType.Buster, activeSkillLevels);
        result.busterThirdQuickFirst.DamageAvg = this.getCardDamage(servant, defender, CardType.Buster, CardPosition.Third, false, ChainType.None, activeSkillLevels);
    }

    public populateExtra(result: DeckDamageResult, servant: Servant, defender: Defender, activeSkillLevels: SkillLevel[]){
        result.extraArtsChain.DamageAvg = this.getCardDamage(servant, defender, CardType.Extra, CardPosition.Extra, false, ChainType.Arts, activeSkillLevels);
        result.extraArtsFirst.DamageAvg = this.getCardDamage(servant, defender, CardType.Extra, CardPosition.Extra, false, ChainType.Brave, activeSkillLevels);

        result.extraBusterChain.DamageAvg = this.getCardDamage(servant, defender, CardType.Extra, CardPosition.Extra, false, ChainType.Buster, activeSkillLevels);
        result.extraBusterFirst.DamageAvg = this.getCardDamage(servant, defender, CardType.Extra, CardPosition.Extra, true, ChainType.Brave, activeSkillLevels);

        result.extraQuickChain.DamageAvg = this.getCardDamage(servant, defender, CardType.Extra, CardPosition.Extra, false, ChainType.Quick, activeSkillLevels);
        result.extraQuickFirst.DamageAvg = this.getCardDamage(servant, defender, CardType.Extra, CardPosition.Extra, false, ChainType.Brave, activeSkillLevels);
    }

    public getCardDamage(servant: Servant, defender: Defender, cardType: CardType, position: CardPosition, isFirstBuster: boolean, chainType: ChainType, activeSkillLevels: SkillLevel[]) : number{
        let cardMultiplier = (isFirstBuster || chainType == ChainType.Buster ? .5 : 0) + (this.getCardDamageValue(cardType, position) * this.getCardModifier(cardType, activeSkillLevels));
        let damage = servant.Attack * .23;

        damage *= cardMultiplier;
        damage *= this._damageMultiplier.getClassModifier(servant.ServantClass);
        damage *= this._classAdvantage.getModifier(servant.ServantClass, defender.ServantClass);
        damage *= this._attributeService.getAttributeModifier(servant, defender);
        damage *= this.getAttackUpModifier(activeSkillLevels, defender);

        if(cardType == CardType.Extra && position == CardPosition.Extra){
            if(chainType == ChainType.Brave){
                damage *= 2;
            }
            else if(chainType == ChainType.Arts || chainType == ChainType.Buster || chainType == ChainType.Quick){
                damage *= 3;
            }
        }

        damage += this.getAdditionalDamage(activeSkillLevels);

        if(chainType == ChainType.Buster){
            damage += (.2 * servant.Attack);
        }

        return Math.round(damage);
    }

    public getAdditionalDamage(activeSkillLevels: SkillLevel[]) : number{
        let damage = 0;

        for(let skill of activeSkillLevels){
            if(this.isDamageUpSkill(skill)){
                damage += skill.getDamageUpModifier();
            }
        }

        return damage;
    }

    public getCardModifier(cardType: CardType, activeSkillLevels: SkillLevel[]) : number{
        let modifier = 1.0;

        for(let skill of activeSkillLevels){
            if(cardType == CardType.Arts && this.isArtsSkill(skill)){
                modifier += skill.getArtsModifier();
            }
            else if(cardType == CardType.Buster && this.isBusterSkill(skill)){
                modifier += skill.getBusterModifier();
            }
            if(cardType == CardType.Quick && this.isQuickSkill(skill)){
                modifier += skill.getQuickModifier();
            }
        }

        return modifier;
    }

    public getAttackUpModifier(activeSkillLevels: SkillLevel[], defender : Defender) : number{
        let modifier = 1.0;

        for(let skill of activeSkillLevels){
            if(this.isAttackUpSkill(skill)){
                modifier += skill.getAttackUpModifier(defender);
            }
        }

        return modifier;
    }

    private isArtsSkill(skill : SkillLevel): skill is ArtsEffeciencySkillLevel{
        return (<ArtsEffeciencySkillLevel>skill).getArtsModifier != undefined;
    }

    private isBusterSkill(skill : SkillLevel): skill is BusterEffeciencySkillLevel{
        return (<BusterEffeciencySkillLevel>skill).getBusterModifier != undefined;
    }

    private isQuickSkill(skill : SkillLevel): skill is QuickEffeciencySkillLevel{
        return (<QuickEffeciencySkillLevel>skill).getQuickModifier != undefined;
    }

    private isAttackUpSkill(skill : SkillLevel): skill is AttackUpSkillLevel{
        return (<AttackUpSkillLevel>skill).getAttackUpModifier != undefined;
    }

    private isDamageUpSkill(skill : SkillLevel): skill is DamageUpSkillLevel{
        return (<DamageUpSkillLevel>skill).getDamageUpModifier != undefined;
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