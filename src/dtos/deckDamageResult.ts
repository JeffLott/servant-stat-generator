export class DeckDamageResult{
    public constructor(){
        this.artsFirstDamage = new DamageResult();
        this.artsSecondArtsFirst = new DamageResult();
        this.artsSecondBusterFirst  = new DamageResult();
        this.artsSecondQuickFirst = new DamageResult();
        this.artsThirdArtsFirst = new DamageResult();
        this.artsThirdBusterFirst = new DamageResult();
        this.artsThirdQuickFirst = new DamageResult();

        this.quickFirstDamage = new DamageResult();
        this.quickSecondArtsFirst  = new DamageResult();
        this.quickSecondBusterFirst  = new DamageResult();
        this.quickSecondQuickFirst = new DamageResult();
        this.quickThirdArtsFirst  = new DamageResult();
        this.quickThirdBusterFirst  = new DamageResult();
        this.quickThirdQuickFirst  = new DamageResult();

        this.busterFirstDamage = new DamageResult();
        this.busterFirstBusterChain = new DamageResult();
        this.busterSecondArtsFirst = new DamageResult();
        this.busterSecondBusterFirst = new DamageResult();
        this.busterSecondQuickFirst = new DamageResult();
        this.busterSecondBusterChain = new DamageResult();
        this.busterThirdArtsFirst = new DamageResult();
        this.busterThirdBusterFirst = new DamageResult();
        this.busterThirdQuickFirst = new DamageResult();
        this.busterThirdBusterChain = new DamageResult();

        this.extraArtsFirst = new DamageResult();
        this.extraArtsChain = new DamageResult();
        this.extraQuickFirst = new DamageResult();
        this.extraQuickChain = new DamageResult();
        this.extraBusterFirst = new DamageResult();
        this.extraBusterChain = new DamageResult();
    }

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
    public DamageAvg : number;
    public GaugeGainedAvg : number;
    public CritStarsGainedAvg : number;
}