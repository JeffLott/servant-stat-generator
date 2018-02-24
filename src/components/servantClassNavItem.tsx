import * as React from 'react';
import { ClassGroupingDto } from '../dtos/classGroupingDto';
import { Divider,  List, Collapse, ListItem, ListItemIcon, ListItemText } from 'material-ui';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';
import { Servant } from '../models/servant';

export interface ServantClassNavItemProps {
    servantClass: ClassGroupingDto;
    onServantSelect: (servant: Servant) => void;
}

export class ServantClassNavItemState {
    public open: boolean;
}

class ServantClassNavItem extends React.Component<ServantClassNavItemProps, ServantClassNavItemState>{
    constructor(props: ServantClassNavItemProps){
        super(props);

        this.state = new ServantClassNavItemState();
    }

    render(){
        const {servantClass} = this.props;

        let style={
            background: "url('./resources/class_icon_sprites.png') -120px -10px",
        };
    
        let innerStyle = {
            paddingLeft: 52
        }
    
        return <div><ListItem style={innerStyle} key={servantClass.className.toString()} onClick={() => this.setState({...this.state, open : !this.state.open}   )}>
                <ListItemIcon><div className="menu-item-icon" style={style}/></ListItemIcon>
                <ListItemText inset primary={servantClass.className} />
                {this.state.open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Divider/>
            <Collapse in={this.state.open}>
                <List>
                    {servantClass.servants.map(servant => {
                        return <div key={servant.servant.name}><ListItem><ListItemText inset primary={servant.servant.name} onClick={() => {this.props.onServantSelect(servant.servant)}}/></ListItem><Divider/></div>
                    })}
                </List>
            </Collapse></div>;
    }
}

export default ServantClassNavItem;