import { ServantClass } from "../models/class";
import { Servant } from "../models/servant";

export class ClassGroupingDto{
    servantClass: ServantClass;
    className: string;
    servants: ServantListDisplayDto[];

    constructor(servantClass: ServantClass){
        this.servantClass = servantClass;
        this.servants = new Array<ServantListDisplayDto>();

        switch(servantClass){
            case ServantClass.AlterEgo:
                this.className = "Alter Ego";
                break;
            case ServantClass.Archer:
                this.className = "Archer";
                break;
            case ServantClass.Assassin:
                this.className = "Assassin";
                break;
            case ServantClass.Avenger:
                this.className = "Avenger";
                break;
            case ServantClass.Beast:
                this.className = "Beast";
                break;
            case ServantClass.Berserker:
                this.className = "Berserker";
                break;
            case ServantClass.Caster:
                this.className = "Caster";
                break;
            case ServantClass.Foreigner:
                this.className = "Foreigner";
                break;
            case ServantClass.Lancer:
                this.className = "Lancer";
                break;
            case ServantClass.MoonCancer:
                this.className = "Moon Cancer";
                break;
            case ServantClass.Rider:
                this.className = "Rider";
                break;
            case ServantClass.Ruler:
                this.className = "Ruler";
                break;
            case ServantClass.Saber:
                this.className = "Saber";
                break;
            case ServantClass.Shielder:
                this.className = "Shielder";
                break; 
        }
    }
}

export class ServantListDisplayDto{
    servant : Servant;

    constructor(servant: Servant){
        this.servant = servant;
    }
}