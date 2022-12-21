import logo from '../../Images/Pepito/logo.png';
import * as React from 'react';
import { Button, Stack, Tabs, Tab, Menu, MenuItem, IconButton, ListItemIcon, ListItemText, Divider } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import brand from '../../Images/Pepito/brand.png';
import { useNavigate } from "react-router-dom";

function Price() {
    const navigate = useNavigate();

    const handlePriceClick = () => {
        navigate("/plans-and-pricing");
    }

    const handleFaqClick = () => {
        navigate("/faq");
    }

    const handleAboutClick = () => {
        navigate("/about-us");
    }

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
                <Tab label="About Us" href="/about-us" 
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
                    <Tab label="ABOUT GAMIFY" href="/about-us" to={handleAboutClick}
                        style={{fontSize: 20, fontWeight: "bold", color: "black", marginRight: 40}}/>
                    <Tab label="PLANS AND PRICING" href="/plans-and-pricing" to={handlePriceClick} 
                        style={{fontSize: 20, fontWeight: "bold", color: "black", marginRight: 35}}/>
                    <Tab label="FAQ" href="/faq" to={handleFaqClick}
                        style={{fontSize: 20, fontWeight: "bold", color: "black", marginRight: 60}}/>
                </Tabs>
            </div>
                
        <center>
            <div style={{borderRadius: "50px", direction: "center", backgroundColor: "rgba(0, 0, 0, 0.829)", 
            height: "70vh", width: "80vw", marginTop: "20px"}}>
                    <h1 style = {{color: "white", fontWeight: "normal", textAlign: "center", margin: "40px"}}><br/>Choose your plan</h1>
                    <div>                      
                    <Stack direction = "row">
                        <div style={{borderRadius: "50px", backgroundColor: "white", width: "20vw", height: "50vh", marginLeft: 100}}>
                            <div style={{backgroundColor: "#016B85", width: "20vw", height: "10vh"}}>
                                <h1 style={{margin: 0, color: "black", fontWeight: "bold", marginBottom: 5}}>FREE</h1>
                                <div style={{marginTop: 0, borderRadius: 100, backgroundColor: "#016B85", width: "10vh", height: "10vh",
                                borderColor: "white", borderStyle: "solid"}}>
                                    <h1 style={{marginTop: 0, marginBottom: 0, color: "black", fontWeight: "bold", align: "center"}}>$0</h1>
                                    <h6 style={{margin: 0, color: "black", fontWeight: "bold", align: "center"}}>per month</h6>
                                </div>
                            </div>
                            <h2 style={{margin: 40, marginTop: 80, color: "#016B85", fontWeight: "normal", align: "center", 
                            marginBottom: 10, borderBottom: "solid"}}>1 user</h2>
                            <h3 style={{margin: 40, color: "#016B85", fontWeight: "normal", align: "center", marginBottom: 10,
                            marginTop: 30, borderBottom: "solid"}}>Free templates</h3>
                            <h4 style={{margin: 40, color: "#016B85", fontWeight: "normal", align: "center", marginBottom: 20,
                            marginTop: 30, borderBottom: "solid"}}>Maximum of 10 subjects</h4>
                            <Button variant = "contained" style={{backgroundColor: "#016B85", borderRadius: "50px"}}>SIGN UP</Button>
                        </div>

                        <div style={{borderRadius: "50px", backgroundColor: "white", width: "20vw", height: "50vh", marginLeft: 50}}>
                            <div style={{backgroundColor: "#19A0A6", width: "20vw", height: "10vh"}}>
                                <h1 style={{margin: 0, color: "black", fontWeight: "bold", marginBottom: 5}}>STANDARD</h1>
                                <div style={{marginTop: 0, borderRadius: 100, backgroundColor: "#19A0A6", width: "10vh", height: "10vh",
                                borderColor: "white", borderStyle: "solid"}}>
                                    <h1 style={{marginTop: 0, marginBottom: 0, color: "black", fontWeight: "bold", align: "center"}}>$5</h1>
                                    <h6 style={{margin: 0, color: "black", fontWeight: "bold", align: "center"}}>per month</h6>
                                </div>
                            </div>
                            <h2 style={{margin: 40, marginTop: 80, color: "#19A0A6", fontWeight: "normal", align: "center", 
                            marginBottom: 10, borderBottom: "solid"}}>5 users</h2>
                            <h4 style={{margin: 40, color: "#19A0A6", fontWeight: "normal", align: "center", marginBottom: 10,
                            marginTop: 30, borderBottom: "solid"}}>Additional templates access</h4>
                            <h4 style={{margin: 40, color: "#19A0A6", fontWeight: "normal", align: "center", marginBottom: 20,
                            marginTop: 30, borderBottom: "solid"}}>Maximum of 20 subjects</h4>
                            <Button variant = "contained" style={{backgroundColor: "#19A0A6", borderRadius: "50px"}}>SIGN UP</Button>
                        </div>

                        <div style={{borderRadius: "50px", backgroundColor: "white", width: "20vw", height: "50vh", marginLeft: 50}}>
                            <div style={{backgroundColor: "#6DFBFB", width: "20vw", height: "10vh"}}>
                                <h1 style={{margin: 0, color: "black", fontWeight: "bold", marginBottom: 5}}>PREMIUM</h1>
                                <div style={{marginTop: 0, borderRadius: 100, backgroundColor: "#6DFBFB", width: "10vh", height: "10vh",
                                borderColor: "white", borderStyle: "solid"}}>
                                    <h1 style={{marginTop: 0, marginBottom: 0, color: "black", fontWeight: "bold", align: "center"}}>$10</h1>
                                    <h6 style={{margin: 0, color: "black", fontWeight: "bold", align: "center"}}>per month</h6>
                                </div>
                            </div>
                            <h2 style={{margin: 40, marginTop: 80, color: "#19A0A6", fontWeight: "normal", align: "center", 
                            marginBottom: 10, borderBottom: "solid"}}>UNLIMITED users</h2>
                            <h4 style={{margin: 40, color: "#19A0A6", fontWeight: "normal", align: "center", marginBottom: 10,
                            marginTop: 30, borderBottom: "solid"}}>ALL templates access</h4>
                            <h4 style={{margin: 40, color: "#19A0A6", fontWeight: "normal", align: "center", marginBottom: 20,
                            marginTop: 30, borderBottom: "solid"}}>UNLIMITED subjects</h4>
                            <Button variant = "contained" style={{color: "#19A0A6",backgroundColor: "#6DFBFB", borderRadius: "50px"}}>SIGN UP</Button>
                        </div>
                    </Stack>    
                    </div>
                </div>
        </center>
        
        
        
        
        
    </div>

  );

}

export default Price;