import * as React from 'react';
import './servantActiveSkill.css';
import { ActiveSkillContainer } from '../models/skill';
import { Tabs, Tab, Paper, Grid, Table, TableBody, TableCell, TableRow, MenuItem, Select } from 'material-ui';
import { SkillIconHelper } from '../helpers/skillIconHelper';
import { Effect } from '../models/effects';

export interface ServantActiveSkillProps{
    skillContainer: ActiveSkillContainer;
    effectsChanged(effects: Effect[]) : void;
}

export class ServantActiveSkillState{
    selectedTab: number = 0;
    selectedLevel: number = 9;
    active: boolean = false;
}

class ServantActiveSkill extends React.Component<ServantActiveSkillProps, ServantActiveSkillState>{
    constructor(props : ServantActiveSkillProps){
        super(props);

        this.state = new ServantActiveSkillState();
    }

    handleChange = (event : any, value : number) => {
        this.setState({ selectedTab: value });
    };

    toggleActive = (event: any) =>{
        this.setState({active: !this.state.active});
    };

    getSkillIconClass() : string{
        if(this.state.active){
            return "wrapped-image active-skill";
        }
        return "wrapped-image";;
    }
    
    componentDidUpdate(prevProps: any, prevState: any){
        if(prevState.selectedTab != this.state.selectedTab || prevState.selectedLevel != this.state.selectedLevel || prevState.active != this.state.active)
        {    
            if(this.state.active)
                this.props.effectsChanged(this.props.skillContainer.skillOptions[this.state.selectedTab].levels[this.state.selectedLevel].effects.map((item) => item.effect));
            else
                this.props.effectsChanged(new Array<Effect>());
        }
    }

    render(){
        return <Paper className={"skill-paper"}>
            <Tabs value={this.state.selectedTab} onChange={this.handleChange} indicatorColor="primary" fullWidth>
                {this.props.skillContainer.skillOptions.map((skill, index) => {
                    return <Tab key={index} label={skill.name}></Tab>
                })}
            </Tabs>
            {this.props.skillContainer.skillOptions.map((skill, index) => {
                if(this.state.selectedTab === index){
                    return <div key={index} className="skill-description-wrapper">
                        <Grid container>
                            <Grid item xs={2}>
                                <img src={SkillIconHelper.getSkillIcon(skill)} className={this.getSkillIconClass()} onClick={(event) => this.toggleActive(event)}/>
                            </Grid>
                            <Grid item xs={10}>
                                <Table>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell><b>Level:</b></TableCell>
                                            <TableCell>
                                                <Select value={this.state.selectedLevel} onChange={(event) => {this.setState({selectedLevel: parseInt(event.target.value)})}}>
                                                    {this.props.skillContainer.skillOptions[this.state.selectedTab].levels.map((level, index) => {
                                                        return <MenuItem key={index} value={index}>{index + 1}</MenuItem>
                                                    })}
                                                </Select>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell><b>Description:</b></TableCell>
                                            <TableCell><div dangerouslySetInnerHTML={{__html: this.props.skillContainer.skillOptions[this.state.selectedTab].levels[this.state.selectedLevel].description}}></div></TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </Grid>
                        </Grid>
                    </div>
                }

                return;
            })}
        </Paper>;
    }
}

export default ServantActiveSkill;