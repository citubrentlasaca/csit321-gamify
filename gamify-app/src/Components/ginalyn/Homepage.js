//import { Visibility, VisibilityOff } from "@mui/icons-material";
import * as React from 'react';
import axios from 'axios';
import { Stack, Tabs, Tab, Menu, MenuItem, IconButton, ListItemIcon, ListItemText, Divider, Box, Button } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import HistoryIcon from '@mui/icons-material/History';
import ViewListIcon from '@mui/icons-material/ViewList';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import SearchIcon from '@mui/icons-material/Search';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import brand from '../../Images/brand.png';
import appicon from '../../Images/appicon.png';
import db1 from '../../Images/dbimage1.png';
import db2 from '../../Images/dbimage2.png';
import { useLocation, useNavigate } from "react-router-dom";

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: 30,
    backgroundColor: '#E0E0E0',
    marginRight: theme.spacing(2),
    width: 500,
    fontSize: 30,
    marginLeft: 30,
    height: 80,
    borderStyle: 'solid',
    borderColor: "#707070"
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    fontSize: 24,
    marginTop: 18,
  }));

function Homepage() {
    const navigate = useNavigate();
    const {state} = useLocation();
    
    const getStudentById = async () => {
        try {
          const response = await axios.get(`http://localhost:8080/student/getByStudentId?studentid=${state.studentid}`);
          const data = response.data;
          navigate("/student-profile", {
            state: {
                firstname: response.data.firstname,
                gender: response.data.gender,
                birthday: response.data.birthday,
                program: response.data.program,
                yearlevel: response.data.yearlevel,
                email: response.data.account.email,
                username: response.data.account.username
            }
          })
          console.log(data);
        } catch (error) {
          console.error(error); // catch any errors
        }
      }

    const [value, setValue] = React.useState(0);  
    const handleChange = (event,newValue) => {
        setValue(newValue);
    }
    return (
        <div classname="App">
            <header className="App-header2-gc">
                <div className="landing-gc">
                    <Stack direction="row">
                        <div>
                            <img src={appicon} alt="app icon" style={{width: 100, height: 70, paddingLeft: 30, paddingTop: 8}}/>
                        </div>
                        <div>
                            <img src={brand} alt="brand name" style={{width: 180, height: 50, paddingTop: 25}}/>
                        </div>
                        <Tabs value={value} onChange={handleChange} style={{marginTop: 15, marginLeft: 40}}>
                            <Tab label="Home" href="/student-homepage" icon={<HomeIcon style={{fontSize: 34}}/>} iconPosition="start" style={{fontSize: 24, fontWeight: "bold", color: "black", marginRight: 10}}/>
                            <Tab label="Activity" href="/student-activity" icon={<HistoryIcon style={{fontSize: 34}}/>} iconPosition="start" style={{fontSize: 24, fontWeight: "bold", color: "black", marginRight: 10}}/>
                            <Tab label="Assessments" href="/assessments" icon={<ViewListIcon style={{fontSize: 34}}/>} iconPosition="start" style={{fontSize: 24, fontWeight: "bold", color: "black", marginRight: 10}}/>
                            <Tab label="Profile" onClick={getStudentById} icon={<PersonIcon style={{fontSize: 34}}/>} iconPosition="start" style={{fontSize: 24, fontWeight: "bold", color: "black", marginRight: 10}}/>
                        </Tabs>
                        <PopupState variant="popover" popupId="demo-popup-menu">
                            {(popupState) => (
                                <React.Fragment>
                                <IconButton aria-label="menu" variant="contained" {...bindTrigger(popupState)} style={{backgroundColor: "white", height: 50, width: 50, marginTop: 25, marginLeft: 130}}>
                                    <MenuIcon style={{fontSize: 40, fontWeight: "bold", color: "black"}} />
                                </IconButton>
                                <Menu {...bindMenu(popupState)}>
                                    <MenuItem disabled style={{fontWeight: "bold", color: "black"}}>{"@"+state.username}</MenuItem>
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
                    <Stack direction="row" style={{marginTop: 20}}>
                        <Box style={{width: 720, backgroundColor: "white", height: 170, borderRadius: 20, marginRight: 30, marginLeft: 40}}>
                            <h3 style={{paddingLeft: 30, marginBottom: 15, marginTop: 15, fontSize: 24}}>{"Welcome " + state.firstname + "!"}</h3>
                            <Stack direction="row">
                                <Search>
                                    <SearchIconWrapper>
                                        <SearchIcon style={{fontSize: 30, color: "#707070"}}/>
                                    </SearchIconWrapper>
                                    <StyledInputBase
                                        placeholder="Search an assessment"
                                        inputProps={{ 'aria-label': 'search' }}
                                    />
                                </Search>
                                <Button size="large" variant="contained" style={{borderRadius: 30, fontSize: 24, color: "black", width: "fit-content", marginRight: 30}}>
                                        Search
                                </Button>
                            </Stack>
                        </Box>
                        <Box style={{width: 560, backgroundColor: "white", height: 170, borderRadius: 20}}>
                            <Box style={{width: 520, backgroundColor: "#D9D9D9", height: 100, borderRadius: 30, marginLeft: 20, marginTop: 35, borderStyle: "solid", borderColor: "#707070"}}>
                                <Stack direction="row">
                                    <Box style={{width: 360, backgroundColor: "white", height: 80, borderRadius: 30, marginLeft: 10, marginTop: 10}}>
                                        <StyledInputBase
                                            placeholder="Enter the code"
                                            inputProps={{ 'aria-label': 'code' }}
                                        />
                                    </Box>
                                    <Button size="large" variant="contained" style={{borderRadius: 30, fontSize: 24, color: "black", width: 130, marginLeft: 8, height: 80, marginTop: 10}}>
                                            Join
                                    </Button>
                                </Stack>
                            </Box>
                        </Box>
                    </Stack>
                    <Stack direction="row">
                        <div style={{marginLeft: 40}}>
                            <img src={db1} alt="dashboard 1" style={{width: 640, height: 370, marginRight: 30, marginTop: 20}}/>
                        </div>
                        <div>
                            <img src={db2} alt="dashboard 2" style={{width: 640, height: 370, marginTop: 20}}/>
                        </div>
                    </Stack>
                </div>
            </header>
        </div>
    );
  }
  
  export default Homepage;