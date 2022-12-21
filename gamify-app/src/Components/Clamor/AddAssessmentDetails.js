import React from 'react';
import axios from 'axios';
import { TextField } from "@mui/material";
import { MdCreate } from "react-icons/md";
import { MdFindInPage } from "react-icons/md";
import logo from '../../Images/Clamor/science.png';
import puzzle from '../../Images/Clamor/puzzle.png';
import quiz from '../../Images/Clamor/quiz.png';
import button from '../../Images/Clamor/button.jpg';
import { useNavigate } from "react-router-dom";

import '../../Components/Clamor/AddAssessmentDetails.css';

 function AddAssessmentDetails(){
    const [assessmentId, setAssessmentId] = React.useState();
    const [title, setTitle] = React.useState("");
    const [instructions, setInstructions] = React.useState("");
    const [description, setDescription] = React.useState("");
  
    const changeTitle = (event) => {
      setTitle(event.target.value);
    };
    const changeInstructions = (event) => {
      setInstructions(event.target.value);
    };
    const changeDescription = (event) => {
      setDescription(event.target.value);
    };

    const createAssessment = () => {
      axios
        .post('http://localhost:8080/assessment/postAssessment', {
          title: title,
          instructions: instructions,
          description: description,
          teacher:
          {
              teacherid : 4
          }
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    const getAssessmentId = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/assessment/getAssessmentId?title=${title}`);
        setAssessmentId(response.data);
        console.log(response.data); // log the data to the console
      } catch (error) {
        console.error(error); // catch any errors
      }
    }

    const getTitle = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/assessment/getByTitle?title=${title}`);
        //setTitle(response.data);
        //console.log(response.data); // log the data to the console
        alert(JSON.stringify(response));
        //console.log(response.toString());
      } catch (error) {
        console.error(error); // catch any errors
      }
    }

    const getDescription = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/assessment/getDescription?title=${title}`);
        setDescription(response.data);
        //console.log(response.data); // log the data to the console
        //alert(JSON.stringify(response));
        //console.log(response.toString());
      } catch (error) {
        console.error(error); // catch any errors
      }
    }

    const getInstructions = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/assessment/getInstructions?title=${title}`);
        setInstructions(response.data);
        //console.log(response.data); // log the data to the console
        //alert(JSON.stringify(response));
        //console.log(response.toString());
      } catch (error) {
        console.error(error); // catch any errors
      }
    }

    const updateAssessment = async () => {
      try {
        const response = await axios.put(`http://localhost:8080/assessment/putAssessment?assessmentid=${assessmentId}`, {
          title: title,
          instructions: instructions,
          description: description,
        });
        console.log(response.data); // log the data to the console
      } catch (error) {
        console.error(error); // catch any errors
      }
    }

    const deleteAssessment = async () => {
      const response = await fetch(`http://localhost:8080/assessment/getAssessmentId?title=${title}`);
      const assessment = await response.json();
  
      await fetch(`http://localhost:8080/assessment/deleteAssessment/${assessment}`, {
        method: "DELETE"
      });
    }

    const navigate = useNavigate();

    const proceedContactUsPage = () => {
      navigate("/contact-us-page");
    };

  return (
    <div>
      <div className="jonas-angelo-clamor-update-assessment-details">
        <span className="jonas-angelo-clamor-update-assessment-details-text">
          <span>
            <span>ASSESSMENT DETAILS</span>
            <br></br>
            <span></span>
          </span>
        </span>
        <span className="jonas-angelo-clamor-update-assessment-details-text05">
          <span>
            <span>
              TITLE:
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span></span>
          </span>
        </span>
        <span className="jonas-angelo-clamor-update-assessment-details-text10">
          <span>
            <span>
              DESCRIPTION:
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span></span>
          </span>
        </span>
        <span className="jonas-angelo-clamor-update-assessment-details-text15">
          <span>
            <span>INSTRUCTIONS:</span>
            <br></br>
            <span></span>
          </span>
        </span>
        <TextField
              input type="text"
              className="jonas-angelo-clamor-update-assessment-details-rectangle7"
              value={title}
              onChange={changeTitle}
              style={{ backgroundColor: 'white'}}
              sx={{
                width: { sm: 1000, md: 600 },
                "& .MuiInputBase-root": {
                    height: 50
                }
            }}
              label ="Title"
              placeholder="Title"
              id="Input Title"
              variant="outlined"
              size = "medium"
            />
        <TextField
              input type="text"
              className="jonas-angelo-clamor-update-assessment-details-rectangle19"
              value={description}
              onChange={changeDescription}
              style={{ backgroundColor: 'white'}}
              sx={{
                width: { sm: 1000, md: 600 },
                "& .MuiInputBase-root": {
                    height: 50
                }
            }}
              label ="Description"
              placeholder="Description"
              id="Input Description"
              variant="outlined"
              size = "medium"
            />
        <TextField
              input type="text"
              className="jonas-angelo-clamor-update-assessment-details-rectangle20"
              name="instructions"
              value={instructions}
              onChange={changeInstructions}
              style={{ backgroundColor: 'white'}}
              sx={{
                width: { sm: 1000, md: 600 },
                "& .MuiInputBase-root": {
                    height: 50
                }
            }}
              label ="Instructions"
              placeholder="Instructions"
              id="Input Instructions"
              variant="outlined"
              size = "medium"
            />
        <MdFindInPage className="jonas-angelo-clamor-update-assessment-details-plus1" onClick={getTitle}></MdFindInPage>
        <MdFindInPage className="jonas-angelo-clamor-update-assessment-details-plus2" onClick={getDescription}></MdFindInPage>
        <MdFindInPage className="jonas-angelo-clamor-update-assessment-details-plus3" onClick={getInstructions}></MdFindInPage>
        <MdCreate className="jonas-angelo-clamor-update-assessment-details-pencil1" onClick={getAssessmentId}></MdCreate>
        <MdCreate className="jonas-angelo-clamor-update-assessment-details-pencil2" onClick={getAssessmentId}></MdCreate>
        <MdCreate className="jonas-angelo-clamor-update-assessment-details-pencil3" onClick={getAssessmentId}></MdCreate>
        <img
          src={quiz}
          alt="quiz11132"
          className="jonas-angelo-clamor-update-assessment-details-quiz1"
        />
        <img
          src={logo}
          alt="science11133"
          className="jonas-angelo-clamor-update-assessment-details-science1"
        />
        <div className="jonas-angelo-clamor-update-assessment-details-group42" onClick={updateAssessment}>
          <span className="jonas-angelo-clamor-update-assessment-details-text26">
            <span>SAVE CHANGES</span>
          </span>
        </div>
        <div className="jonas-angelo-clamor-update-assessment-details-group43" onClick={createAssessment}>
          <span className="jonas-angelo-clamor-update-assessment-details-text28">
            <span>CREATE ASSESSMENT ITEMS</span>
          </span>
        </div>
        <div className='jonas-angelo-clamor-update-assessment-details-group47' onClick={deleteAssessment} />
          <span className="jonas-angelo-clamor-update-assessment-details-text30" onClick={deleteAssessment} >
            <span>DELETE DETAILS</span>
          </span>
        </div>
        <img
          src={puzzle}
          alt="puzzlepiece11146"
          className="jonas-angelo-clamor-update-assessment-details-puzzlepiece1"
        />
        <div className="jonas-angelo-clamor-update-assessment-details-component2">
          <div
            src="/playground_assets/rectangle851149-rb03-200h.png"
            alt="Rectangle851149"
            className="jonas-angelo-clamor-update-assessment-details-rectangle85"
          />
          <div
            src="/playground_assets/rectangle861150-t5r7-200h.png"
            alt="Rectangle861150"
            className="jonas-angelo-clamor-update-assessment-details-rectangle86"
          />
          <TextField
              className="jonas-angelo-clamor-update-assessment-details-rectangle86"
              style={{ backgroundColor: 'white'}}
              sx={{
                width: { sm: 1500, md: 450 },
                "& .MuiInputBase-root": {
                    height: 1000
                }
            }}
              label ="Enter The Code"
              placeholder="Enter The Code"
              id="Input Code"
              variant="outlined"
              size = "medium"
            />
          <img
            src={button}
            alt="Rectangle871152"
            className="jonas-angelo-clamor-update-assessment-details-rectangle87"
            onClick={proceedContactUsPage}
          />
          <span className="jonas-angelo-clamor-update-assessment-details-text34" >
          <span>SHARE</span>
          </span>
        </div>
      </div>

    )
  }
  
  export default AddAssessmentDetails;