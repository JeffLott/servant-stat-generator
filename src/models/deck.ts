export class Deck
{
    private _quickCount : number;
    private _quickHits : number;
    private _artsCount : number;
    private _artsHits : number;
    private _busterCount : number;
    private _busterHits : number;
    private _extaHits : number;

    public constructor(quickCount: number, quickHits: number, artsCount: number, artsHits: number, 
        busterCount: number, busterHits: number, extraHits: number){
        this._quickCount = quickCount;
        this._quickHits = quickHits;
        this._artsCount = artsCount;
        this._artsHits = artsHits;
        this._busterCount = busterCount;
        this._busterHits = busterHits;
        this._extaHits = extraHits;
    }

    public get QuickCount() : number {
        return this._quickCount;
    }

    public get QuickHits() : number {
        return this._quickHits;
    }

    public get ArtsCount() : number {
        return this._artsCount;
    }

    public get ArtsHits() : number {
        return this._artsHits;
    }

    public get BusterCount() : number {
        return this._busterCount;
    }

    public get BusterHits() : number {
        return this._busterHits;
    }

    public get ExtraHits() : number {
        return this._extaHits;
    }
}