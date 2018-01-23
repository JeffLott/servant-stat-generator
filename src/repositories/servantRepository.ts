import { Servant } from "../models/servant";
import { MashuKyrielight } from "../servants/MashuKyrielight";

export class ServantRepository{
    private readonly _servants : Array<Servant> = new Array<Servant>();

    public constructor(){
        this._servants.push(new MashuKyrielight());
    }

    public getAllServants() : Array<Servant>{
        return this._servants;
    }
}