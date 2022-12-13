import logo from '../../images/logo.png';
import * as React from 'react';
import { TextField, Button, Stack, Tabs, Tab, Menu, MenuItem, IconButton, ListItemIcon, ListItemText, Divider } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import HistoryIcon from '@mui/icons-material/History';
import ViewListIcon from '@mui/icons-material/ViewList';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import brand from '../../images/brand.png';
import { BsFillCaretLeftFill, BsSearch, BsDownload} from "react-icons/bs";

function TeacherDownloadResultPage() {
    const data = [
        { lastname: "Cahutay", firstname: "Stephanie Micah", attempt: 1, score: 50 },
        { lastname: "Cañeda", firstname: "Ginalyn", attempt: 1, score: 50 },
        { lastname: "Clamor", firstname: "Jonas Angelo", attempt: 1, score: 50 },
        { lastname: "Lasaca", firstname: "Brent", attempt: 1, score: 50 },
        { lastname: "Pepito", firstname: "Elaiza Faye", attempt: 1, score: 50 }
      ]
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
            <div className="CourseDownload-name">
                <Stack direction = "row">
                    <div>
                        <h2 style={{align: "center", marginLeft: 200, color: "#00ffff"}}>
                            [CSIT321 F1 - C0] Applications Development and Emerging Technologies</h2>
                    </div>
                </Stack>
            </div>

            <div className= "Assessment-title">
                <Stack direction="row">
                    <IconButton size = "large" marginLeft = "200px"> <BsFillCaretLeftFill fontSize= "inherit"/> </IconButton> 
                    <div>
                        <h2 style={{align: "center", marginLeft: 370, marginRight: 270}}>Review on OOP Concepts Assessment</h2>
                    </div>
                </Stack>
            </div>
            
            <div>
                <div className = "Student-scores">
                    <Stack direction="row">
                        <TextField  id="outlined-basic" variant="outlined" fullWidth label="Lastname" 
                                    helperText="Please Enter Lastname of Student to View Record"
                                    style={{width:"60vh", align: "center", marginTop: 20, color: "black",
                                    marginBottom: 20, marginLeft: 390}}/>
                        <IconButton size = "large" marginTop ="100px" > <BsSearch fontSize= "inherit"/> </IconButton> 
                    </Stack>
                    <table className = "Table">
                        <tr>
                            <th style={{fontSize: 30, border: "solid", width: "300px", borderBottom: "solid"}}>Lastname</th>
                            <th style={{fontSize: 30, border: "solid", width: "300px"}}>Firstname</th>
                            <th style={{fontSize: 30, border: "solid", width: "300px"}}>Attempt/s</th>
                            <th style={{fontSize: 30, border: "solid", width: "300px"}}>Score</th>
                        </tr>
                        {data.map((val, key) => {
                        return (
                            <tr key={key}>
                            <td style={{marginLeft: 20, border: "solid", width: "300px"}} >{val.lastname}</td>
                            <td style={{marginLeft: 20, border: "solid", width: "300px"}} >{val.firstname}</td>
                            <td style={{marginLeft: 200, border: "solid", width: "300px", alignContent: "center"}} >{val.attempt}</td>
                            <td style={{marginLeft: 200, border: "solid", width: "300px", alignContent: "center"}} >{val.score}</td>
                            </tr>
                        )})}
                    </table>
                    <div>
                        <Button variant="contained" size="small" startIcon={<BsDownload color = "black"/>} 
                            style={{ height: 50, backgroundColor: "#CAFDFF", marginTop: 35, marginBottom: 20, 
                            color:"black", fontWeight: "bolder", marginLeft:"125vh", borderRadius: "550px"}}>Download Scores</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeacherDownloadResultPage;