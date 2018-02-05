import * as React from 'react';
import { ClassGroupingDto } from '../dtos/classGroupingDto';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';

export interface Props {
    servantClass: ClassGroupingDto;
}

export class ServantClassNavItemState {
    public open: boolean;
}

class ServantClassNavItem extends React.Component<Props, ServantClassNavItemState>{
    constructor(props: Props){
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
    
        return <ListItem style={innerStyle} key={servantClass.className.toString()} onClick={() => {console.log('clicked');this.setState({...this.state, open : !this.state.open})}}>
                <ListItemIcon><div className="menu-item-icon" style={style}/></ListItemIcon>
                <ListItemText inset primary={servantClass.className} />
                {this.state.open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>;
    }
}



export default ServantClassNavItem;