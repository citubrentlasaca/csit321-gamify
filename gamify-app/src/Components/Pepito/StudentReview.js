import logo from '../../Images/Pepito/logo.png';
import * as React from 'react';
import { Stack, Tabs, Tab, Menu, MenuItem, IconButton, ListItemIcon, ListItemText, Divider } from "@mui/material";
import { BsFillCaretLeftFill } from "react-icons/bs";
import HomeIcon from '@mui/icons-material/Home';
import HistoryIcon from '@mui/icons-material/History';
import ViewListIcon from '@mui/icons-material/ViewList';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import brand from '../../Images/Pepito/brand.png';


function StudentReview() {
    const [value, setValue] = React.useState(1);  
    const handleChange = (event,newValue) => {
        setValue(newValue);
}
return (  
    <div className="landing">
        <Stack direction="row">
            <div>
                <img src={logo} alt="logo" style={{width: 120, height: 80, paddingLeft: 10}}/>
            </div>
            <div>
                <img src={brand} alt="brand name" style={{width: 200, height: 60, paddingTop: 20}}/>
            </div>
            <Tabs value={value} onChange={handleChange} style={{marginTop: 15, marginLeft: 70}}>
                <Tab label="Home" href="/home" icon={<HomeIcon style={{fontSize: 40}}/>} iconPosition="start" 
                    style={{fontSize: 32, fontWeight: "bold", color: "black", marginRight: 10}}/>
                <Tab label="Activity" href="/actvity" icon={<HistoryIcon style={{fontSize: 40}}/>} iconPosition="start" 
                    style={{fontSize: 32, fontWeight: "bold", color: "black", marginRight: 10}}/>
                <Tab label="Assessments" href="/assessments" icon={<ViewListIcon style={{fontSize: 40}}/>} iconPosition="start" 
                        style={{fontSize: 32, fontWeight: "bold", color: "black", marginRight: 10}}/>
                <Tab label="Profile" href="/profile" icon={<PersonIcon style={{fontSize: 40}}/>} iconPosition="start" 
                        style={{fontSize: 32, fontWeight: "bold", color: "black", marginRight: 10}}/>
            </Tabs>
            <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                    <React.Fragment>
                    <IconButton aria-label="menu" variant="contained" {...bindTrigger(popupState)} 
                        style={{backgroundColor: "white", height: 50, width: 50, marginTop: 25, marginLeft: 30}}>
                        <MenuIcon style={{fontSize: 40, fontWeight: "bold", color: "black"}} />
                    </IconButton>
                    <Menu {...bindMenu(popupState)}>
                        <MenuItem disabled style={{fontWeight: "bold", color: "black"}}>@username</MenuItem>
                        <Divider />
                        <MenuItem onClick={popupState.close}>
                            <ListItemIcon>
                                <LogoutIcon style={{fontSize: 30}} />
                            </ListItemIcon>
                            <ListItemText style={{fontWeight: "bold", color: "black"}}>Logout</ListItemText>
                        </MenuItem>
                    </Menu>
                </React.Fragment>
            )}
            </PopupState>          
        </Stack>
        <Divider sx={{ borderBottomWidth: 7, borderColor: "#609292" }}/>     

        <div className="bg-Student-Result">   
      
            <Stack direction="row">
                <IconButton size = "large" marginLeft = "200px"> <BsFillCaretLeftFill fontSize= "inherit"/> </IconButton> 
                <div>
                    <h2 style={{align: "center", marginLeft: 590, marginRight: 570}}>REVIEW ANSWERS</h2>
                </div>
                <div>
                    <h2>49/50</h2>
                </div>
            </Stack>
            
            <div className="Question">
                <h2 style={{fontWeight: "normal", marginLeft: 20}}>{"1. Construct a regular expresion for L = { w is in {a,b} / w starts with bb}"}</h2>
            </div>
            <div className="Answer">
                <h2 style={{fontWeight: "bold", marginLeft: 20, marginTop: 0}}>ANSWER: bb(a+b)*</h2>
            </div>
            <div className="Correct">
                <h2 style={{color: "#ffffff", fontWeight: "normal", marginLeft: 20, marginTop: 0}}>1/1 Correct</h2>
            </div>

            <div className="Question">
                <h2 style={{fontWeight: "normal", marginLeft: 20}}>{"2. Construct a regular expresion for L = { w is in {a,b} / w ends with aa}"} </h2>
            </div>
            <div className="Answer">
                <h2 style={{fontWeight: "bold", marginLeft: 20, marginTop: 0}}>ANSWER: (a+b)*aa</h2>
            </div>
            <div className="Correct">
                <h2 style={{color: "#ffffff", fontWeight: "normal", marginLeft: 20, marginTop: 0}}>1/1 Correct</h2>
            </div>

            <div className="Question">
                <h2 style={{fontWeight: "normal", marginLeft: 20}}>{"3. Construct a regular expresion for L = { w is in {a,b} / w contains bbaa as substring}"}</h2>
            </div>
            <div className="Answer">
                <h2 style={{fontWeight: "bold", marginLeft: 20, marginTop: 0}}>ANSWER: (bbaa)*</h2>
            </div>
            <div className="Correct-Answer">
                <h2 style={{color: "#ffffff", fontWeight: "normal", marginLeft: 20, marginTop: 0}}>CORRECT ANSWER: DELETE</h2>
            </div>
            <div className="Incorrect">
                <h2 style={{color: "#ffffff", fontWeight: "normal", marginLeft: 20, marginTop: 0}}>0/1 Incorrect</h2>
            </div>
            
        </div>

        
    </div>

  );

}

export default StudentReview;