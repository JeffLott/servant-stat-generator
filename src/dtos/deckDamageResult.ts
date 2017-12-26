export class DeckDamageResult{
    public artsCount : number;
    public artsFirstDamage : DamageResult;
    public artsSecondArtsFirst : DamageResult;
    public artsSecondBusterFirst : DamageResult;
    public artsSecondQuickFirst : DamageResult;
    public artsThirdArtsFirst : DamageResult;
    public artsThirdBusterFirst : DamageResult;
    public artsThirdQuickFirst : DamageResult;

    public quickCount : number;
    public quickFirstDamage : DamageResult;
    public quickSecondArtsFirst : DamageResult;
    public quickSecondBusterFirst : DamageResult;
    public quickSecondQuickFirst : DamageResult;
    public quickThirdArtsFirst : DamageResult;
    public quickThirdBusterFirst : DamageResult;
    public quickThirdQuickFirst : DamageResult;

    public busterCount : number;
    public busterFirstDamage : DamageResult;
    public busterFirstBusterChain : DamageResult;
    public busterSecondArtsFirst : DamageResult;
    public busterSecondBusterFirst : DamageResult;
    public busterSecondQuickFirst : DamageResult;
    public busterSecondBusterChain : DamageResult;
    public busterThirdArtsFirst : DamageResult;
    public busterThirdBusterFirst : DamageResult;
    public busterThirdQuickFirst : DamageResult;
    public busterThirdBusterChain : DamageResult;

    public extraArtsFirst : DamageResult;
    public extraArtsChain : DamageResult;
    public extraQuickFirst : DamageResult;
    public extraQuickChain : DamageResult;
    public extraBusterFirst : DamageResult;
    public extraBusterChain : DamageResult;
}

export class DamageResult{
    public DamageMax : number;
    public DamageMin : number;
    public DamageAvg : number;
    public GaugeGained : number;
    public CritStarsGained : number;
}