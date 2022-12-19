//import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Stack, Link, Button } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import brand from '../../Images/brand.png';
import appicon from '../../Images/appicon.png';

function Landing() {
    return (
        <div className="landing">
            <Stack direction="row">
                <div>
                    <img src={appicon} alt="app icon" style={{width: 120, height: 80, paddingLeft: 30}}/>
                </div>
                <div>
                    <img src={brand} alt="brand name" style={{width: 200, height: 60, paddingTop: 20}}/>
                </div>
                <Link href="#" color="inherit" underline="none" style={{fontSize: 32, fontWeight: "bold", paddingTop: 25, paddingLeft: 80}}>
                    {'About'}
                </Link>
                <Link href="#" color="inherit" underline="none" style={{fontSize: 32, fontWeight: "bold", paddingTop: 25, paddingLeft: 60}}>
                    {'Contact'}
                </Link>
                <div className="landing-bg">
                    <Button variant="contained" style={{backgroundColor: "#00E4F9", borderRadius: 10, fontWeight: "bold", color: "black", fontSize: 28, height: 52, marginTop: 25, marginLeft: 460}}>
                        Sign up
                    </Button>
                </div>
            </Stack>
            <div style={{position: "relative", bottom: 500 }}>
                <Stack>
                    <p style={{textAlign: "center", color: "black", fontSize: 28, marginBottom: 40, fontWeight: "bold", marginRight: 620}}>
                        <em>Everything you need to create, play<br/>
                        and share fun experience doing<br/>
                        digitized and gamified assessments, <br/>
                        all made possible with Gamify.</em>
                    </p>
                    <Button size="large" variant="contained" endIcon={<ArrowForwardIcon style={{fontSize: 34}}/>} style={{backgroundColor: "black", borderRadius:10, fontWeight: "bold", color: "white", fontSize: 24, marginTop: 25, width: "fit-content", marginLeft: 255}}>
                        Get Started
                    </Button>
                </Stack>
            </div>
        </div>
    );
  }
  
  export default Landing;