import * as React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import ServantRepository from '../repositories/servantRepository';
import { Servant } from '../models/servant';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import { List} from 'material-ui';
import { ClassGroupingDto, ServantListDisplayDto } from '../dtos/classGroupingDto';
import ServantClassNavItem from './servantClassNavItem';

class ServantNavBar extends React.Component{
    state : NavBarState;
    servantRepo: ServantRepository;
    classGroupings: ClassGroupingDto[];
    menuList: JSX.Element[];

    constructor(props : any) {
        super(props);
        this.state = new NavBarState();
        this.servantRepo = new ServantRepository();
        this.classGroupings = new Array<ClassGroupingDto>();
        this.populateServants();

        this.menuList = this.classGroupings.map((grouping) => {
            return <ServantClassNavItem servantClass={grouping} key={grouping.className} onServantSelect={(servant) => {console.log(servant);this.setState({...this.state, servant: servant});}}></ServantClassNavItem>
        })
    }

    private populateServants(){
        this.servantRepo.getAllServants().forEach((servant: Servant) => {
            let group = this.classGroupings.find((group) => group.servantClass == servant.servantClass);
            if(group == null){
                group = new ClassGroupingDto(servant.servantClass);
                this.classGroupings.push(group);
            }

            group.servants.push(new ServantListDisplayDto(servant));
        });
    }

    handleToggle = () => this.setState({open: !this.state.open});
    containerStyle : any = {top : 64};

    
    render(){
        

        const drawer = (
        <Drawer
            type="permanent"
            anchor="left"
            className="drawer-paper"
        >
            <div className="drawer-header"/>
            <Divider />
            <List>{this.menuList}</List>
        </Drawer>
        );

        return (
            <div className="app-frame">
                <AppBar className="app-bar">
                    <Toolbar>
                        <Typography type="title" color="inherit" noWrap>
                            Servant Simulator
                        </Typography>
                    </Toolbar>
                </AppBar>
                {drawer}
                <main>
                    <Typography>{this.state.servant ? this.state.servant.name : "No servant selected."}</Typography>
                </main>
            </div>
        );
    }
}

class NavBarState{
    public open : boolean;
    public servant: Servant;

    constructor(){
        this.open = false;
    }
}

export default ServantNavBar;