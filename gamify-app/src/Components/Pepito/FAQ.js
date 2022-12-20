import logo from '../../Images/Pepito/logo.png';
import * as React from 'react';
import { Stack, Tabs, Tab, Menu, MenuItem, IconButton, ListItemIcon, ListItemText, Divider } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import brand from '../../Images/Pepito/brand.png';
import Collapsible from 'react-collapsible';


function FAQ() {
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
                <Tab label="About Us" href="/home" 
                    style={{font:"Arial", fontSize: 32, fontWeight: "bold", color: "black", marginRight: 20}}/>
                <Tab label="Contact Us" href="/activity" 
                    style={{font:"Arial", fontSize: 32, fontWeight: "bold", color: "black", marginRight: 450}}/>
            </Tabs>
            <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
                <React.Fragment>
                    <IconButton aria-label="menu" variant="contained" {...bindTrigger(popupState)} 
                        style={{backgroundColor: "white", height: 50, width: 50, marginTop: 25, marginLeft: 130}}>
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


        <div>
            <Tabs value={value} onChange={handleChange} style={{marginTop: 15, marginLeft: 60}}>
                <Tab label="ABOUT GAMIFY" href="/home" 
                    style={{fontSize: 20, fontWeight: "bold", color: "black", marginRight: 40}}/>
                <Tab label="PLANS AND PRICING" href="/actvity" 
                    style={{fontSize: 20, fontWeight: "bold", color: "black", marginRight: 35}}/>
                <Tab label="FAQ" href="/assessments" 
                style={{fontSize: 20, fontWeight: "bold", color: "black", marginRight: 60}}/>
            </Tabs>
        </div>

        <h1 style={{ margin: 30 }}>Frequently Asked Questions (FAQ)</h1>
        <div style={{backgroundColor: "white", marginLeft: 30, marginRight: 30, borderLeft: 10, borderStyle: "solid", borderColor:"white"}}>
            <Collapsible fullWidth triggerStyle={{backgroundColor: "white", width: "70vh"}} trigger="● How do I enter a class?">
                <p style = {{marginLeft: 20, color: "#016B85"}}>
                You simply ask for the class code from the teacher. 
                Then, click Join class. Put in the given code. 
                Click enter and wait for you to be accepted by the teacher.
                </p>

            </Collapsible>
        </div>
        
        <div style={{backgroundColor: "#016B85", marginLeft: 30, marginRight: 30, borderLeft: 10, borderStyle: "solid", borderColor:"#016B85"}}>
            <Collapsible fullWidth triggerStyle={{backgroundColor: "#016B85",color: "white", IconButton}} trigger="● How to fix if I forgot my password?">
                <p style = {{marginLeft: 20, color: "white"}}>
                    In the log in page, click the forgot password button. 
                    Follow the verification process. Then create a new password.
                </p>
            </Collapsible>
        </div>

        <div style={{backgroundColor: "white", marginLeft: 30, marginRight: 30, borderLeft: 10, borderStyle: "solid", borderColor:"white"}}>
            <Collapsible fullWidth triggerStyle={{backgroundColor: "white", width: "70vh"}} trigger="● How to sign up?">
                <p style = {{marginLeft: 20, color: "#016B85"}}>
                In the main page, click sign up. Then choose account whether you are a teacher or student.
                After that simply follow the steps in the account creation process.
                </p>

            </Collapsible>
        </div>
        
        <div style={{backgroundColor: "#016B85", marginLeft: 30, marginRight: 30, borderLeft: 10, borderStyle: "solid", borderColor:"#016B85"}}>
            <Collapsible fullWidth triggerStyle={{backgroundColor: "#016B85",color: "white", IconButton}} trigger="● How to upgrade pricing plans?">
                <p style = {{marginLeft: 20, color: "white"}}>
                    Click your profile. Go to subscription. Click edit subscription. 
                    Verify account. Then, change to the plan you wanted. Settle payment method. After that, click save.
                </p>
            </Collapsible>
        </div>
        
        <div style={{backgroundColor: "white", marginLeft: 30, marginRight: 30, borderLeft: 10, borderStyle: "solid", borderColor:"white"}}>
            <Collapsible fullWidth triggerStyle={{backgroundColor: "white", width: "70vh"}} trigger="● How to create an assessment using a template?">
                <p style = {{marginLeft: 20, color: "#016B85"}}>
                Click create assessment. Browse templates. Choose one then edit the template.
                </p>

            </Collapsible>
        </div>
        
    </div>

  );

}

export default FAQ;