import * as React from 'react';
import { Deck } from '../models/deck';
import { CardType } from '../models/cardType';

export interface CardDisplayProps{
    deck: Deck;
    cardNumber: number;
}

class CardDisplayState{
    constructor(type: CardType, hits: number){
        this.cardType = type;
        this.hitCount = hits;
    }

    cardType: CardType;
    hitCount: number;
}

class CardDisplay extends React.Component<CardDisplayProps, CardDisplayState>{
    constructor(props: CardDisplayProps){
        super(props);

        if(props.deck.QuickCount >= props.cardNumber)
            this.state = new CardDisplayState(CardType.Quick, props.deck.QuickHits);
        else if(props.deck.ArtsCount + props.deck.QuickCount >= props.cardNumber)
            this.state = new CardDisplayState(CardType.Arts, props.deck.ArtsHits);
        else
            this.state = new CardDisplayState(CardType.Buster, props.deck.BusterHits);
    }

    getImage() : string{
        let base = './resources/Command-Cards/';

        switch(this.state.cardType){
            case CardType.Arts:
                return base + 'Arts.png';
            case CardType.Buster:
                return base + 'Buster.png';
            case CardType.Quick:
                return base + 'Quick.png';
        }

        return '';
    }

    render(){
        return <div><img src={this.getImage()} className="wrapped-image"/></div>;
    }
}

export default CardDisplay;