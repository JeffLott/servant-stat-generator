import { ServantClass } from "../models/class";

export class ClassAdvantageService{
    public getModifier(attacker: ServantClass, defender: ServantClass) : number{
        switch(attacker){
            case ServantClass.Saber:
                return this.getSaberModifier(defender);
            case ServantClass.Archer:
                return this.getArcherModifier(defender);
            case ServantClass.Lancer:
                return this.getLancerModifier(defender);
            case ServantClass.Rider:
                return this.getRiderModifier(defender);
            case ServantClass.Caster:
                return this.getCasterModifier(defender);
            case ServantClass.Assassin:
                return this.getAssassinModifier(defender);
            case ServantClass.Berserker:
                return this.getBerserkerModifier(defender);
            case ServantClass.Ruler:
                return this.getRulerModifier(defender);
            case ServantClass.Shielder:
                return this.getShielderModifier(defender);
            case ServantClass.AlterEgo:
                return this.getAlterEgoModifier(defender);
            case ServantClass.Avenger:
                return this.getAvengerModifier(defender);
            case ServantClass.MoonCancer:
                return this.getMoonCancerModifier(defender);
            case ServantClass.Foreigner:
                return this.getForeignerModifier(defender);
            default:
                return 1.0;
        }
    }

    private getSaberModifier(defender : ServantClass) : number{
        switch(defender){
            case ServantClass.Lancer:
            case ServantClass.Berserker:
                return 2.0;
            case ServantClass.Archer:
            case ServantClass.Ruler:
                return .5;
            default:
                return 1;
        }
    }

    private getArcherModifier(defender : ServantClass) : number{
        switch(defender){
            case ServantClass.Saber:
            case ServantClass.Berserker:
                return 2.0;
            case ServantClass.Lancer:
            case ServantClass.Ruler:
                return .5;
            default:
                return 1;
        }
    }

    private getLancerModifier(defender : ServantClass) : number{
        switch(defender){
            case ServantClass.Archer:
            case ServantClass.Berserker:
                return 2.0;
            case ServantClass.Saber:
            case ServantClass.Ruler:
                return .5;
            default:
                return 1;
        }
    }

    private getRiderModifier(defender: ServantClass) : number{
        switch(defender){
            case ServantClass.Caster:
            case ServantClass.Berserker:
                return 2.0;
            case ServantClass.Assassin:
            case ServantClass.Ruler:
                return .5;
            default:
                return 1;
        }
    }

    private getCasterModifier(defender: ServantClass) : number{
        switch(defender){
            case ServantClass.Assassin:
            case ServantClass.Berserker:
                return 2.0;
            case ServantClass.Rider:
            case ServantClass.Ruler:
                return .5;
            default:
                return 1;
        }
    }

    private getAssassinModifier(defender: ServantClass) : number{
        switch(defender){
            case ServantClass.Rider:
            case ServantClass.Berserker:
                return 2.0;
            case ServantClass.Caster:
            case ServantClass.Ruler:
                return .5;
            default:
                return 1;
        }
    }

    private getBerserkerModifier(defender: ServantClass) : number{
        switch(defender){
            case ServantClass.Shielder:
                return 1.0;
            case ServantClass.Foreigner:
                return .5;
            default:
                return 1.5;
        }
    }

    private getRulerModifier(defender: ServantClass) : number{
        switch(defender){
            case ServantClass.MoonCancer:
            case ServantClass.Berserker:
                return 2.0;
            case ServantClass.Avenger:
                return .5;
            default:
                return 1;
        }
    }

    private getShielderModifier(defender: ServantClass) : number{
        return 1;
    }

    private getAvengerModifier(defender: ServantClass) : number{
        switch(defender){
            case ServantClass.Ruler:
            case ServantClass.Berserker:
                return 2.0;
            case ServantClass.MoonCancer:
                return .5;
            default:
                return 1;
        }
    }

    private getAlterEgoModifier(defender: ServantClass) : number{
        switch(defender){
            case ServantClass.Foreigner:
            case ServantClass.Berserker:
                return 2;
            case ServantClass.Rider:
            case ServantClass.Caster:
            case ServantClass.Assassin:
                return 1.5;
            case ServantClass.Beast:
                return 1.2;
            case ServantClass.Saber:
            case ServantClass.Archer:
            case ServantClass.Lancer:
                return .5;
            default:
                return 1;
        }
    }

    private getMoonCancerModifier(defender: ServantClass) : number{
        switch(defender){
            case ServantClass.Avenger:
            case ServantClass.Berserker:
                return 2.0;
            case ServantClass.Beast:
                return 1.2;
            case ServantClass.Ruler:
                return .5;
            default:
                return 1;
        }
    }

    private getForeignerModifier(defender: ServantClass) : number{
        switch(defender){
            case ServantClass.Foreigner:
            case ServantClass.Berserker:
                return 2.0;
            case ServantClass.AlterEgo:
                return .5;
            default:
                return 1;
        }
    }
}