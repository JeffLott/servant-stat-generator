import * as React from 'react';
import { ActiveSkillContainer } from '../models/skill';
import { Tabs, Tab, Paper, Grid, Table, TableBody, TableCell, TableRow, MenuItem, Select } from 'material-ui';
import { SkillIconHelper } from '../helpers/skillIconHelper';

export interface ServantActiveSkillProps{
    skillContainer: ActiveSkillContainer;
}

export class ServantActiveSkillState{
    selectedTab: number = 0;
    selectedLevel: number = 9;
}

class ServantActiveSkill extends React.Component<ServantActiveSkillProps, ServantActiveSkillState>{
    constructor(props : ServantActiveSkillProps){
        super(props);

        this.state = new ServantActiveSkillState();
    }

    handleChange = (event : any, value : number) => {
        this.setState({ selectedTab: value });
    };
    
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
                                <img src={SkillIconHelper.getSkillIcon(skill)} className="wrapped-image"/>
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