import { Servant } from "../models/servant";
import { ServantClass } from "../models/class";
import { Deck } from "../models/deck";
import { Traits } from "../models/traits";
import { Attribute } from "../models/attributes";
import { RidingC } from "../skills/ridingSkills";
import { MagicResistanceA } from "../skills/magicResistanceSkills";
import { ActiveSkillContainer } from "../models/skill";
import { TransientWallOfSnowflakes, ExaltedImperviousWallOfSnowflakes } from "../skills/defenseUpSkills";
import { ObscurantWallOfChalk } from "../skills/invincibilitySkils";
import { ShieldOfRousingResolution } from "../skills/focusTargetSkills";

export class MashuKyrielight extends Servant{
    public constructor(){
        super("Mash Kyrielight", ServantClass.Shielder, 6791, new Deck(1,2,2,2,2,1,3), .099, .0084, .03, [Traits.Humanoid, Traits.Servant, Traits.Riding, Traits.Lawful, Traits.Good, Traits.WeakToEnumaElesh, Traits.Western, Traits.AllyOfJustice, Traits.NewComer, Traits.Under165Cm, Traits.Female], Attribute.Earth);
        
        this._passiveSkills.push(new RidingC());
        this._passiveSkills.push(new MagicResistanceA());

        this._activeSkills.push(new ActiveSkillContainer(new TransientWallOfSnowflakes(), new ExaltedImperviousWallOfSnowflakes()), new ActiveSkillContainer(new ObscurantWallOfChalk()), new ActiveSkillContainer(new ShieldOfRousingResolution()));

        this._aliases.push("Mashu", "Best Kohai");
    }
}