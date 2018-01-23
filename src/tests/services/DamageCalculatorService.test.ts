import { DamageCalculatorService } from "../../services/damageCalculatorService";
import { DamageMultiplierService } from "../../services/damageMultiplierService";
import { ClassAdvantageService } from "../../services/classAdvantageService";
import { Servant } from "../../models/servant";
import { ServantClass } from "../../models/class";
import { Deck } from "../../models/deck";
import { Attribute } from "../../models/attributes";
import { Traits } from "../../models/traits";
import { Combatant } from "../../models/combatant";
import { AttributeService } from "../../services/attributeService";
import { CardType } from "../../models/cardType";
import { CardPosition } from "../../models/cardPosition";
import { ChainType } from "../../models/chainType";
import { Effect, EffectType } from "../../models/effects";

describe('basic damage calculation test', () => {
    let mutliplierService = new DamageMultiplierService();
    let classAdvantageService = new ClassAdvantageService();
    let attributeService = new AttributeService();
    let calcService = new DamageCalculatorService(mutliplierService, classAdvantageService, attributeService);
    let defender = new Combatant(ServantClass.Shielder, new Array<Traits>(), Attribute.Man);

    const firstArts = 230;
    const firstQuick = 184;
    const firstBuster = 460;

    it('calculates first card damage', () => {
        let sampleServant = new TestServant();
        expect(calcService.getCardDamage(sampleServant, defender, CardType.Arts, CardPosition.First, false, ChainType.None, new Array<Effect>())).toBe(firstArts);
        // expect(damageResult.artsSecondArtsFirst.DamageAvg).toBe(276);
        // expect(damageResult.artsSecondBusterFirst.DamageAvg).toBe(391);
        // expect(damageResult.artsSecondQuickFirst.DamageAvg).toBe(276);
        // expect(damageResult.artsThirdArtsFirst.DamageAvg).toBe(322);
        // expect(damageResult.artsThirdBusterFirst.DamageAvg).toBe(437);
        // expect(damageResult.artsThirdQuickFirst.DamageAvg).toBe(322);

        expect(calcService.getCardDamage(sampleServant, defender, CardType.Quick, CardPosition.First, false, ChainType.None, new Array<Effect>())).toBe(firstQuick);
        // expect(damageResult.quickSecondArtsFirst.DamageAvg).toBe(221);
        // expect(damageResult.quickSecondBusterFirst.DamageAvg).toBe(336);
        // expect(damageResult.quickSecondQuickFirst.DamageAvg).toBe(221);
        // expect(damageResult.quickThirdArtsFirst.DamageAvg).toBe(258);
        // expect(damageResult.quickThirdBusterFirst.DamageAvg).toBe(373);
        // expect(damageResult.quickThirdQuickFirst.DamageAvg).toBe(258);

        expect(calcService.getCardDamage(sampleServant, defender, CardType.Buster, CardPosition.First, true, ChainType.None, new Array<Effect>())).toBe(firstBuster);
        expect(calcService.getCardDamage(sampleServant, defender, CardType.Buster, CardPosition.First, true, ChainType.Buster, new Array<Effect>())).toBe(firstBuster + 200);
        // expect(damageResult.busterSecondArtsFirst.DamageAvg).toBe(414);
        // expect(damageResult.busterSecondBusterFirst.DamageAvg).toBe(529);
        // expect(damageResult.busterSecondBusterChain.DamageAvg).toBe(729);
        // expect(damageResult.busterSecondQuickFirst.DamageAvg).toBe(414);
        // expect(damageResult.busterThirdArtsFirst.DamageAvg).toBe(483);
        // expect(damageResult.busterThirdBusterFirst.DamageAvg).toBe(598);
        // expect(damageResult.busterThirdBusterChain.DamageAvg).toBe(798);
        // expect(damageResult.busterThirdQuickFirst.DamageAvg).toBe(483);
    });

    it('calculates second card damage', () => {
        let sampleServant = new TestServant();
        expect(calcService.getCardDamage(sampleServant, defender, CardType.Arts, CardPosition.Second, false, ChainType.None, new Array<Effect>())).toBe(Math.round(firstArts * 1.2));
        expect(calcService.getCardDamage(sampleServant, defender, CardType.Arts, CardPosition.Second, true, ChainType.None, new Array<Effect>())).toBe(Math.round(firstArts * 1.7));

        expect(calcService.getCardDamage(sampleServant, defender, CardType.Quick, CardPosition.Second, false, ChainType.None, new Array<Effect>())).toBe(Math.round(firstQuick * 1.2));
        expect(calcService.getCardDamage(sampleServant, defender, CardType.Quick, CardPosition.Second, true, ChainType.None, new Array<Effect>())).toBe(Math.round(firstQuick * 1.825));

        expect(calcService.getCardDamage(sampleServant, defender, CardType.Buster, CardPosition.Second, false, ChainType.None, new Array<Effect>())).toBe(Math.round(firstBuster * .9));
        expect(calcService.getCardDamage(sampleServant, defender, CardType.Buster, CardPosition.Second, true, ChainType.None, new Array<Effect>())).toBe(Math.round(firstBuster * 1.15));
        expect(calcService.getCardDamage(sampleServant, defender, CardType.Buster, CardPosition.Second, true, ChainType.Buster, new Array<Effect>())).toBe(Math.round(firstBuster * 1.15) + 200);
    });

    it('accounts for attack up', () => {
        let sampleServant = new TestServant();
        let defender = new Combatant(ServantClass.Shielder, new Array<Traits>(), Attribute.Man);
    
        let effect = new Effect(EffectType.AttackUp, .1);

        expect(calcService.getCardDamage(sampleServant, defender, CardType.Arts, CardPosition.First, false, ChainType.None, new Array<Effect>(effect))).toBe(Math.round(firstArts * 1.1));
        expect(calcService.getCardDamage(sampleServant, defender, CardType.Quick, CardPosition.First, false, ChainType.None, new Array<Effect>(effect))).toBe(Math.round(firstQuick * 1.1));
        expect(calcService.getCardDamage(sampleServant, defender, CardType.Buster, CardPosition.First, true, ChainType.None, new Array<Effect>(effect))).toBe(Math.round(firstBuster * 1.1));
        expect(calcService.getCardDamage(sampleServant, defender, CardType.Buster, CardPosition.First, true, ChainType.Buster, new Array<Effect>(effect))).toBe(Math.round(firstBuster * 1.1 + 200));
    });

    // it('accounts for damage up', () => {
    //     let sampleServant = new TestServant();
    //     let defender = new Defender(ServantClass.Shielder, new Array<Traits>(), Attribute.Man);
    
    //     let skill = new TestDamageUpSkill();
    //     let damageResult = calcService.getDeckDamage(sampleServant, defender, new Array<SkillLevel>(skill));

    //     expect(damageResult).not.toBeNull();
    //     expect(damageResult.artsFirstDamage.DamageAvg).toBe(330);
    //     expect(damageResult.quickFirstDamage.DamageAvg).toBe(284);
    //     expect(damageResult.busterFirstDamage.DamageAvg).toBe(560);
    //     expect(damageResult.busterFirstBusterChain.DamageAvg).toBe(760);
    // });

    // it('accounts for buster up', () => {
    //     let sampleServant = new TestServant();
    //     let defender = new Defender(ServantClass.Shielder, new Array<Traits>(), Attribute.Man);
    
    //     let skill = new TestBusterUpSkill();
    //     let damageResult = calcService.getDeckDamage(sampleServant, defender, new Array<SkillLevel>(skill));

    //     expect(damageResult).not.toBeNull();
    //     expect(damageResult.artsFirstDamage.DamageAvg).toBe(230);
    //     expect(damageResult.quickFirstDamage.DamageAvg).toBe(184);
    //     expect(damageResult.busterFirstDamage.DamageAvg).toBe(495);
    //     expect(damageResult.busterFirstBusterChain.DamageAvg).toBe(695);
    // });

    // it('accounts for arts up', () => {
    //     let sampleServant = new TestServant();
    //     let defender = new Defender(ServantClass.Shielder, new Array<Traits>(), Attribute.Man);
    
    //     let skill = new TestArtsUpSkill();
    //     let damageResult = calcService.getDeckDamage(sampleServant, defender, new Array<SkillLevel>(skill));

    //     expect(damageResult).not.toBeNull();
    //     expect(damageResult.artsFirstDamage.DamageAvg).toBe(253);
    //     expect(damageResult.quickFirstDamage.DamageAvg).toBe(184);
    //     expect(damageResult.busterFirstDamage.DamageAvg).toBe(460);
    //     expect(damageResult.busterFirstBusterChain.DamageAvg).toBe(660);
    // });

    // it('accounts for quick up', () => {
    //     let sampleServant = new TestServant();
    //     let defender = new Defender(ServantClass.Shielder, new Array<Traits>(), Attribute.Man);
    
    //     let skill = new TestQuickUpSkill();
    //     let damageResult = calcService.getDeckDamage(sampleServant, defender, new Array<SkillLevel>(skill));

    //     expect(damageResult).not.toBeNull();
    //     expect(damageResult.artsFirstDamage.DamageAvg).toBe(230);
    //     expect(damageResult.quickFirstDamage.DamageAvg).toBe(202);
    //     expect(damageResult.busterFirstDamage.DamageAvg).toBe(460);
    //     expect(damageResult.busterFirstBusterChain.DamageAvg).toBe(660);
    // });

    // it('accounts for type advantage', () => {
    //     let sampleServant = new TestServant();
    //     let defender = new Defender(ServantClass.Lancer, new Array<Traits>(), Attribute.Man);
    
    //     let damageResult = calcService.getDeckDamage(sampleServant, defender, new Array<SkillLevel>());

    //     expect(damageResult).not.toBeNull();
    //     expect(damageResult.artsFirstDamage.DamageAvg).toBe(460);
    //     expect(damageResult.quickFirstDamage.DamageAvg).toBe(368);
    //     expect(damageResult.busterFirstDamage.DamageAvg).toBe(920);
    //     expect(damageResult.busterFirstBusterChain.DamageAvg).toBe(1120);
    // });

    // it('accounts for type disadvantage', () => {
    //     let sampleServant = new TestServant();
    //     let defender = new Defender(ServantClass.Archer, new Array<Traits>(), Attribute.Man);
    
    //     let damageResult = calcService.getDeckDamage(sampleServant, defender, new Array<SkillLevel>());

    //     expect(damageResult).not.toBeNull();
    //     expect(damageResult.artsFirstDamage.DamageAvg).toBe(115);
    //     expect(damageResult.quickFirstDamage.DamageAvg).toBe(92);
    //     expect(damageResult.busterFirstDamage.DamageAvg).toBe(230);
    //     expect(damageResult.busterFirstBusterChain.DamageAvg).toBe(430);
    // });

    // it('accounts for attribute advantage', () => {
    //     let sampleServant = new TestServant();
    //     let defender = new Defender(ServantClass.Shielder, new Array<Traits>(), Attribute.Sky);
    
    //     let damageResult = calcService.getDeckDamage(sampleServant, defender, new Array<SkillLevel>());

    //     expect(damageResult).not.toBeNull();
    //     expect(damageResult.artsFirstDamage.DamageAvg).toBe(253);
    //     expect(damageResult.quickFirstDamage.DamageAvg).toBe(202);
    //     expect(damageResult.busterFirstDamage.DamageAvg).toBe(506);
    //     expect(damageResult.busterFirstBusterChain.DamageAvg).toBe(706);
    // });

    // it('accounts for attribute disadvantage', () => {
    //     let sampleServant = new TestServant();
    //     let defender = new Defender(ServantClass.Shielder, new Array<Traits>(), Attribute.Earth);
    
    //     let damageResult = calcService.getDeckDamage(sampleServant, defender, new Array<SkillLevel>());

    //     expect(damageResult).not.toBeNull();
    //     expect(damageResult.artsFirstDamage.DamageAvg).toBe(207);
    //     expect(damageResult.quickFirstDamage.DamageAvg).toBe(166);
    //     expect(damageResult.busterFirstDamage.DamageAvg).toBe(414);
    //     expect(damageResult.busterFirstBusterChain.DamageAvg).toBe(614);
    // });
});

export class TestServant extends Servant{
    public constructor(){
        let deck = new Deck(1,3,1,2,3,1,3);
        super("Test", ServantClass.Saber, 1000, deck, 1, 1, 1, new Array<Traits>(), Attribute.Man);
    }
}