import logo from '../../Images/Pepito/logo.png';
import * as React from 'react';
import { Button, Stack, Tabs, Tab, Menu, MenuItem, IconButton, ListItemIcon, ListItemText, Divider } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import HistoryIcon from '@mui/icons-material/History';
import ViewListIcon from '@mui/icons-material/ViewList';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import brand from '../../Images/Pepito/brand.png';
import { useNavigate } from "react-router-dom";

function StudentResult() {
  const navigate = useNavigate();

  const handleReviewAnswerClick = () => {
      navigate("/student-review-assessment-result");
  }

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

        <div className="bg-Student-Result">   
            <h3 style={
                {marginTop: 0,textAlign: "left", color: "#077d7d", fontStyle: "italic", fontOpticalSizing:"revert", 
                fontSize: 25, marginLeft: 20, marginBottom: 5, fontWeight: "normal"}}><br/><br/><br/><br/>Recent
            </h3>
      
      <Stack direction="row" backgroundColor="rgba(27, 24, 24, 0.626)">
        <div className="Review-Container">
          <h2 style={
            {textAlign: "left", color: "white", fontSize: 20, marginLeft: 20, marginBottom: 0, marginTop: 50}}>CSIT321 F1 - C0
          </h2>
          <h2 style={
            {textAlign: "left", color: "white", fontSize: 20, marginLeft: 20, marginBottom: 0, marginTop: 0}}>Review on OOP Concepts
          </h2>
        </div>
          <Button variant="text" onClick={handleReviewAnswerClick} backgroundColor="transparent" style={{color: "#00ffff"}}>REVIEW ANSWERS</Button>
      </Stack>
      

      <Stack direction="row" spacing={2} backgroundColor="#00ffffaa">
        <div className="Attempt-Container">
          <h2 style={
            {textAlign: "left", color: "black", fontSize: 20, marginLeft: 20, marginBottom: 0, fontWeight: "normal"}}>
              Attempts Allowed: 1<br/>This quiz closed on: Friday,<br/>December 2, 2022, 10:30 AM<br/>Time Limit: 1 hour
          </h2>
        </div>

        <div className="Score-Container">
          <h1 style={
            {textAlign: "right", color: "black", fontSize: 50, marginRight: 20, marginBottom: 0, fontWeight: "bold"}}>49/50
          </h1>
        </div>
      </Stack>
      
      <h2 style={
            {textAlign: "center", color: "black", fontSize: 20, marginLeft: 20, marginTop: 40, fontWeight: "BOLD"}}>
            <br/><br/>JOB WELL DONE!<br/>No more attempts are allowed<br/><br/><br/>
      </h2>
        
    </div>


        
    </div>
  );
}

export default StudentResult;