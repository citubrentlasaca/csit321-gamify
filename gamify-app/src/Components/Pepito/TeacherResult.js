import logo from '../../images/logo.png';
import * as React from 'react';
import { Button, Stack, Tabs, Tab, Menu, MenuItem, IconButton, ListItemIcon, ListItemText, Divider } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import HistoryIcon from '@mui/icons-material/History';
import ViewListIcon from '@mui/icons-material/ViewList';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import brand from '../../images/brand.png';
import { BsFillCaretLeftFill, BsFillEyeFill} from "react-icons/bs";
import Collapsible from 'react-collapsible';


function TeacherResult() {
    const [value, setValue] = React.useState(0);  
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

        <div className="Numbers-bg">   
            <div className= "Result">
                <Stack direction="row">
                    <IconButton size = "large" marginLeft = "200px"> <BsFillCaretLeftFill fontSize= "inherit"/> </IconButton> 
                    <div>
                        <h2 style={{align: "center", marginLeft: 480, marginRight: 270}}>ASSESSMENT RESULTS</h2>
                    </div>
                </Stack>
            </div>
            
            <div className="Course-name">
                <Collapsible triggerStyle={{backgroundColor: "black", color: "#00ffff", fontWeight: "bold",
                fontSize: 20, margin: 10}} trigger="[CSIT321 F1 - C0] Applications Development and Emerging Technologies">
                    <div className="WhiteView-Title">
                        <Stack direction = "row">
                        <div>
                            <h2 style={{align: "right", marginTop: 30, marginLeft: 30, marginRight: 90, color: "black"}}>[CSIT321 F1 - C0]<br/>Review on OOP Concepts</h2>
                        </div>
                        <div>
                            <Button variant="contained" size="small" startIcon={<BsFillEyeFill color = "black"/>} 
                            style={{ height: 50, backgroundColor: "#CAFDFF", marginTop: 35, marginBottom: 20, 
                            color:"black", fontWeight: "bolder", marginLeft:"550px", borderRadius: "50px"}}>View Student's Scores</Button>
                        </div>   
                        </Stack>
                    </div>

                    <div className="AquaView-Title">
                        <Stack direction = "row">
                            <div>
                                <h2 style={{align: "right", marginTop: 30, marginLeft: 30, marginRight: 160, color: "black"}}>[CSIT321 F1 - C0]<br/>Review on React JS</h2>
                            </div>
                            <div>
                                <Button variant="contained" size="small" startIcon={<BsFillEyeFill color = "black"/>} style={{ height: 50, backgroundColor: "#CAFDFF",
                                marginTop: 35, marginBottom: 20, color:"black", fontWeight: "bolder", marginLeft:"550px", borderRadius: "50px"}} >View Student's Scores</Button>
                            </div>   
                        </Stack>
                    </div>
                </Collapsible>
            </div>

            <div className="Course-name">
                <Collapsible triggerStyle={{backgroundColor: "black", color: "#00ffff", fontWeight: "bold",
                fontSize: 20, margin: 10}} trigger="[ES038 F1 - C0] Technopreneurship">
                    <div className="WhiteView-Title">
                        <Stack direction = "row">
                        <div>
                            <h2 style={{align: "right", marginTop: 30, marginLeft: 30, marginRight: 4, color: "black"}}>[CSIT321 F1 - C0]<br/>Review on Market Segmentation</h2>
                        </div>
                        <div>
                            <Button variant="contained" size="small" startIcon={<BsFillEyeFill color = "black"/>} 
                            style={{ height: 50, backgroundColor: "#CAFDFF", marginTop: 35, marginBottom: 20, 
                            color:"black", fontWeight: "bolder", marginLeft:"550px", borderRadius: "50px"}}>View Student's Scores</Button>
                        </div>   
                        </Stack>
                    </div>

                    <div className="AquaView-Title">
                        <Stack direction = "row">
                            <div>
                                <h2 style={{align: "right", marginTop: 30, marginLeft: 30, marginRight: 160, color: "black"}}>[CSIT321 F1 - C0]<br/>Review on Product</h2>
                            </div>
                            <div>
                                <Button variant="contained" size="small" startIcon={<BsFillEyeFill color = "black"/>} style={{ height: 50, backgroundColor: "#CAFDFF",
                                marginTop: 35, marginBottom: 20, color:"black", fontWeight: "bolder", marginLeft:"550px", borderRadius: "50px"}} >View Student's Scores</Button>
                            </div>   
                        </Stack>
                    </div>
                </Collapsible>
            </div>
            

            <div className="Course-name">
                <Collapsible triggerStyle={{backgroundColor: "black", color: "#00ffff", fontWeight: "bold",
                fontSize: 20, margin: 10}} trigger="[CSIT340 F1 - C2] Industry Elective">
                </Collapsible>
            </div>
        
        </div>        
    </div>

  );

}

export default TeacherResult;