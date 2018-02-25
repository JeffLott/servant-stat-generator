import * as React from 'react';
import { Servant } from '../models/servant';
import { Effect } from '../models/effects';
import  { Paper, Table, TableBody, TableRow, TableCell, Grid, TextField } from 'material-ui';
import { ServantClass } from '../models/class';
import './servantDisplay.css';
import ServantSkillComponent from './servantSkill';

export interface ServantDisplayProps{
    servant : Servant;
}

export class ServantDisplayState{
    constructor(servant: Servant){
        this.activeEffects = new Array<Effect>();
        this.servant = servant;
    }

    activeEffects: Effect[];
    public servant: Servant;
}

class ServantDisplay extends React.Component<ServantDisplayProps, ServantDisplayState>{
    constructor(props: ServantDisplayProps){
        super(props);

        this.state = new ServantDisplayState(props.servant);
    }

    handleChange = (name: string) => (event: any) => {
        this.state.servant[name] = event.target.value;
        this.setState(this.state);
      };

    render(){
        console.log('render called.');
        this.state = new ServantDisplayState(this.props.servant);

        if(!this.state.servant)
            return <div></div>;
        
        return  <Grid container alignItems="center">
            <Grid item xs={4}/>
            <Grid item xs={4}>        
                <Paper>
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
                                    <b>Attack:</b>
                                </TableCell>
                                <TableCell>
                                    <TextField type="number" value={this.state.servant.attack} onChange={this.handleChange('attack')}></TextField>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Paper>
                {this.state.servant.activeSkills.map( (skill, index) => {
                    return <ServantSkillComponent skillContainer={skill} key={index}></ServantSkillComponent>;
                })}
            </Grid>
            <Grid item xs={4}/>
        </Grid>;
    }
}

export default ServantDisplay;