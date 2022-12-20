import './App.css';
import * as React from 'react';
/**import AddItems from './Components/Lasaca/AddItems.js'**/
import AddAssessmentDetails from './Components/Clamor/AddAssessmentDetails.js';
import Subjects from './Components/Clamor/Subjects.js'
import AssessmentOne from './Components/Clamor/AssessmentOne.js'
import AssessmentTwo from './Components/Clamor/AssessmentTwo.js'
import AssessmentThree from './Components/Clamor/AssessmentThree.js'
import AssessmentFour from './Components/Clamor/AssessmentFour.js'
import AssessmentFive from './Components/Clamor/AssessmentFive.js'
import AssessmentSix from './Components/Clamor/AssessmentSix.js'
import AssessmentSeven from './Components/Clamor/AssessmentSeven.js'
import AssessmentEight from './Components/Clamor/AssessmentEight.js'
import AssessmentNine from './Components/Clamor/AssessmentNine.js'
import AssessmentTen from './Components/Clamor/AssessmentTen.js'
import AssessmentEleven from './Components/Clamor/AssessmentEleven.js'
import AssessmentTwelve from './Components/Clamor/AssessmentTwelve.js'
import AssessmentPageOne from './Components/Clamor/AssessmentPageOne.js'
import AssessmentPageTwo from './Components/Clamor/AssessmentPageTwo.js'
import AssessmentPageThree from './Components/Clamor/AssessmentPageThree.js'
import AssessmentPageFour from './Components/Clamor/AssessmentPageFour.js'
import ContactUsPage from './Components/Clamor/ContactUsPage.js'
/**import {Stack} from "@mui/material";**/
import {Stack} from "@mui/material";

function App() {
  return(
    <Stack>
        {/* <AddItems/> */}
        {/*<AssessmentPageOne/>*/}
        {/*<AssessmentPageTwo/>*/}
        {/*<AssessmentPageThree/>*/}
        <AssessmentPageFour/>
        <ContactUsPage/>
        <Subjects/>
        <AssessmentOne/>
        <AssessmentTwo/>
        <AddAssessmentDetails/>
        <AssessmentThree/>
        <AssessmentFour/>
        <AssessmentFive/>
        <AssessmentSix/>
        <AssessmentSeven/>
        <AssessmentEight/>
        <AssessmentNine/>
        <AssessmentTen/>
        <AssessmentEleven/>
        <AssessmentTwelve/>
    </Stack>
  )
}

export default App;