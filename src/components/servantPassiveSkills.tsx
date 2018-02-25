import * as React from 'react';
import { PassiveSkill, Skill } from '../models/skill';
import { Paper, Tabs, Tab, Grid } from 'material-ui';
import { SkillIconHelper } from '../helpers/skillIconHelper';

export class ServantPassiveSkillsProps{
    passiveSkills: PassiveSkill[];
}

export class ServantPassiveSkillsState{
    selectedTab: number = 0;
}

class ServantPassiveSkills extends React.Component<ServantPassiveSkillsProps, ServantPassiveSkillsState>{
    constructor(props: ServantPassiveSkillsProps){
        super(props);

        this.state = new ServantPassiveSkillsState();
    }

    getStyle(skill: Skill) : any{
        return {
            background: "url('"  + SkillIconHelper.getSkillIcon(skill) + "')",
            height: 93,
            width: 93
        };
    }

    render(){
        return <Paper className={"paper-display"}>
            <Tabs value={this.state.selectedTab} onChange={(event : any, value : number) => this.setState({selectedTab: value})}>
                {this.props.passiveSkills.map((skill, index) => {
                    return <Tab key={index} label={skill.name}/>;
                })}
            </Tabs>
            {this.props.passiveSkills.map((skill, index) => {
                if(this.state.selectedTab !== index)
                    return;
                
                return <Grid container key={index} className="skill-description-wrapper" alignItems="center">
                    <Grid item xs={2}>
                        <div style={this.getStyle(skill)}/>
                    </Grid>
                    <Grid item xs={9}>
                        <div dangerouslySetInnerHTML={{__html: skill.description}}></div>
                    </Grid>
                </Grid>
            })}
        </Paper>;
    }
}

export default ServantPassiveSkills;