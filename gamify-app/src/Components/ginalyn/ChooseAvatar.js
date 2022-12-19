//import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Stack, Button, Avatar} from "@mui/material";
import logo from '../../Images/applogo.png';

function ChooseAvatar() {
    return (
        <div className="bg-registration">
            <hr className="line-mid"></hr>
            <Stack direction="row">
                <div className="welcome">
                    <Stack>
                        <h1 style={{textAlign: "center", color: "black", fontSize: 30, marginBottom: 5}}>Welcome to Gamify!</h1>
                        <p style={{textAlign: "center", color: "black", fontSize: 22, marginBottom: 40}}>
                            <em>Start your journey and make the most out<br/>
                            of the fun and exciting assessment<br/>
                            experience that you will ever have.</em>
                        </p>
                        <img src={logo} alt="gamify logo" style={{width: 300, height: 200, paddingLeft: 50}}/>
                    </Stack>
                </div>
                <div className="Registration-container">
                    <h1 style={{textAlign: "left", color: "#7A8889", fontSize: 24}}>Student Account Information</h1>
                    <hr className="line"></hr>
                    <Stack spacing={4}>
                        <h1 style={{textAlign: "left", color: "black", fontSize: 24, marginBottom: 5, marginTop: 6}}>Choose your avatar</h1>
                        <Stack direction="row" justifyContent="space-evenly">
                            <div>
                                <Avatar 
                                    sx={{ bgcolor: "#016B85", width: 100, height: 100}}
                                    src="/broken-image.jpg"
                                />
                            </div>
                            <div>
                                <Stack>
                                    <Button size="large" variant="contained" style={{backgroundColor: "#60E3F7", borderRadius: 10, color: "black", marginBottom: 12, fontWeight: "bold"}}>Select Avatar</Button>
                                    <Button size="large" variant="contained" style={{backgroundColor: "#60E3F7", borderRadius: 10, color: "black", fontWeight: "bold"}}>Upload Avatar</Button>
                                </Stack>
                            </div>
                        </Stack>
                    </Stack>
                    <Button size="large" variant="contained" style={{backgroundColor: "black", marginTop: 60, borderRadius: 10, fontWeight: "bold", marginBottom: 2, marginLeft: 180}}>Save</Button>
                    <div>
                        <Button size="large" variant="text" style={{fontWeight: "bold", color: "black", marginLeft: 152}}>Skip for now</Button>
                    </div>
                </div>
            </Stack>
        </div>
    );
  }
  
  export default ChooseAvatar;