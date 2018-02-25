import * as React from 'react';
import { ActiveSkillContainer, Skill } from '../models/skill';
import  { Tabs, Tab, Paper, Grid, Table, TableBody, TableCell, TableRow } from 'material-ui';
import { SkillIcon } from '../models/skillIcon';
import './servantSkill.css';

export interface ServantSkillComponentProps{
    skillContainer: ActiveSkillContainer;
}

export class ServantSkillComponentState{
    selectedTab: number = 0;
    selectedLevel: number = 2;
}

class ServantSkillComponent extends React.Component<ServantSkillComponentProps, ServantSkillComponentState>{
    constructor(props : ServantSkillComponentProps){
        super(props);

        this.state = new ServantSkillComponentState();
    }

    handleChange = (event : any, value : number) => {
        this.setState({ selectedTab: value });
    };
    
    handleChangeIndex = (index : number) => {
        this.setState({ selectedTab: index });
    };

    getSkillIcon(skill: Skill) : string{
        let base = "./resources/Skill-Icons/";

        switch(skill.icon){
            case SkillIcon.DefenseUp:
                return base + 'Skill_Icon_Defense_Up.png';
            case SkillIcon.FocusTarget:
                return base + 'Skill_Icon_Taunt.png';
            case SkillIcon.Invincible:
                return base + 'Skill_Icon_Invul.png';
            case SkillIcon.MagicResistance:
                return base + 'Skill_Icon_Magic_Resistance';
            case SkillIcon.Riding:
                return base + "Skill_Icon_Riding.png";
        }

        return '';
    }

    getStyle(skill: Skill) : any{
        return {
            background: "url('"  + this.getSkillIcon(skill) + "')",
            height: 93,
            width: 93
        };
    }

    render(){
        return <Paper className={"skill-paper"}>
            <Tabs value={this.state.selectedTab} onChange={this.handleChange} indicatorColor="primary" fullWidth>
                {this.props.skillContainer.skillOptions.map((skill, index) => {
                    return <Tab key={index} label={skill.name}></Tab>
                })}
            </Tabs>
            {this.props.skillContainer.skillOptions.map((skill, index) => {
                console.log(this.state.selectedTab + ':' + index)

                if(this.state.selectedTab === index){
                    return <div key={index} className="skill-description-wrapper">
                        <Grid container>
                            <Grid item xs={2}>
                                <div style={this.getStyle(skill)}/>
                            </Grid>
                            <Grid item xs={9}>
                                <Table>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell><b>Level:</b></TableCell>
                                            <TableCell>{this.state.selectedLevel + 1}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell><b>Description:</b></TableCell>
                                            <TableCell>{this.props.skillContainer.skillOptions[this.state.selectedTab].levels[this.state.selectedLevel].description}</TableCell>
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

export default ServantSkillComponent;