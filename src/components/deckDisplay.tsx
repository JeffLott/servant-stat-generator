import * as React from 'react';
import { Deck } from '../models/deck';
import { Effect } from '../models/effects';
import { Paper, Grid } from 'material-ui';
import CardDisplay from './cardDisplay';

export interface DeckDisplayProps{
    deck: Deck;
    effects: Effect[];
}

export class DeckDisplayState{
    
}

class DeckDisplay extends React.Component<DeckDisplayProps, DeckDisplayState>{
    constructor(props: DeckDisplayProps){
        super(props);

        this.state = new DeckDisplayState();
    }

    render(){
        return <Paper className="paper-display">
            <Grid container>
                <Grid item xs={1}/>
                <Grid item xs={2}><CardDisplay deck={this.props.deck} cardNumber={1}/></Grid>
                <Grid item xs={2}><CardDisplay deck={this.props.deck} cardNumber={2}/></Grid>
                <Grid item xs={2}><CardDisplay deck={this.props.deck} cardNumber={3}/></Grid>
                <Grid item xs={2}><CardDisplay deck={this.props.deck} cardNumber={4}/></Grid>
                <Grid item xs={2}><CardDisplay deck={this.props.deck} cardNumber={5}/></Grid>
                <Grid item xs={1}/>
            </Grid>
        </Paper>
    }
}

export default DeckDisplay;