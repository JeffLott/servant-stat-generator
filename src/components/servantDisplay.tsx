import * as React from 'react';
import { Servant } from '../models/servant';
import { Effect } from '../models/effects';
import { Paper, Table, TableBody, TableRow, TableCell, Grid, TextField, Tabs, Tab, Typography } from 'material-ui';
import { ServantClass } from '../models/class';
import './servantDisplay.css';
import ServantActiveSkill from './servantActiveSkill';
import { Attribute } from '../models/attributes';
import ServantPassiveSkills from './servantPassiveSkills';
import DeckDisplay from './deckDisplay';

export interface ServantDisplayProps{
    servant : Servant;
}

export class ServantDisplayState{
    constructor(servant: Servant){
        this.activeEffects = new Array<Effect>();
        this.servant = servant;
        this.selectedTab = 0;
        console.log('new state');
    }
    selectedTab: number;
    activeEffects: Effect[];
    servant: Servant;
}

class ServantDisplay extends React.Component<ServantDisplayProps, ServantDisplayState>{
    constructor(props: ServantDisplayProps){
        super(props);

        console.log('constructor called');
        this.state = new ServantDisplayState(props.servant);
    }

    handleChange = (name: string) => (event: any) => {
        this.state.servant[name] = event.target.value;
        this.setState(this.state);
      };

    handleTabSelect = (event : any, value : number) => {
        this.setState({selectedTab: value}, () => {console.log(this.state)});
    }

    handleEffectsChanged = (effects: Effect[]) => {
        this.setState({activeEffects: effects});
    };

    componentWillReceiveProps(nextProps: ServantDisplayProps){
        if(nextProps !== this.props){
            this.setState({servant: nextProps.servant});
        }
    }

    render(){
        console.log('render called.');

        if(!this.state.servant)
            return <div></div>;
        
        return  <Grid container alignItems="center">
            <Grid item xs={1} md={2} lg={3} xl={4}/>
            <Grid item xs={10} md={10} lg={6} xl={4}>        
                <Paper className="paper-display">
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <b>Name:</b>
                                </TableCell>
                                <TableCell>
                                    {this.state.servant.name}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <b>Class:</b>
                                </TableCell>
                                <TableCell>
                                    {ServantClass[this.state.servant.servantClass]}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <b>Attribute:</b>
                                </TableCell>
                                <TableCell>
                                    {Attribute[this.state.servant.attribute]}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <b>Attack:</b>
                                </TableCell>
                                <TableCell>
                                    <TextField type="number" value={this.state.servant.attack} onChange={this.handleChange('attack')}></TextField>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Paper>
                <Typography variant="title" align="center">Passive Skills</Typography>
                <ServantPassiveSkills passiveSkills={this.state.servant.passiveSkills}></ServantPassiveSkills>
                <Typography variant="title" align="center">Active Skills</Typography>
                <Paper className="paper-display">
                    <Tabs value={this.state.selectedTab ? this.state.selectedTab : 0} onChange={this.handleTabSelect}>
                        <Tab value={0} label={"1st Skill"}/>
                        <Tab value={1} label={"2nd Skill"}/>
                        <Tab value={2} label={"3rd Skill"}/>
                    </Tabs>
                    {this.state.servant.activeSkills.map( (skill, index) => {
                        return <div key={index} className={this.state.selectedTab !== index ? 'hidden' : ''}>
                            <ServantActiveSkill skillContainer={skill} effectsChanged={this.handleEffectsChanged}>
                            </ServantActiveSkill>
                        </div>;
                    })}
                </Paper>
                <Typography variant="title" align="center" gutterBottom>Deck</Typography>
                <DeckDisplay deck={this.state.servant.deck} effects={this.state.activeEffects}></DeckDisplay>
            </Grid>
            <Grid item xs={1} md={2} lg={3} xl={4}/>
        </Grid>;
    }
}

export default ServantDisplay;