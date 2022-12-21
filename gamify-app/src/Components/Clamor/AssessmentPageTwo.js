import React from 'react'
import arrow from '../../Images/Clamor/arrow.png'
import game from '../../Images/Clamor/Minimalist Quote Poster 6.png'
import gamify from '../../Images/Clamor/Minimalist Quote Poster 7.png'
import todolist from '../../Images/Clamor/to-do-list 2.png'
import evaluate from '../../Images/Clamor/evaluation 2.png'
import input from '../../Images/Clamor/input 2.png'
import shield from '../../Images/Clamor/shield 3.png'
import checkbox from '../../Images/Clamor/empty-checkbox 1.png'
import { useNavigate } from "react-router-dom";

import '../../Components/Clamor/AssessmentPageTwo.css'

function Automata() {
  const navigate = useNavigate();

  const proceedAssessmentFour = () => {
      navigate("/automata/assessments/regular-expression-quiz");
  }
  const proceedAssessmentFive = () => {
    navigate("/automata/assessments/cfg-long-quiz");
  }
  const proceedAssessmentSix = () => {
    navigate("/automata/assessments/nfa-quiz");
  }

  return (
    <div>
      <div className="jonas-angelo-clamor-view-collection-of-assessments-assess-jonas-angelo-clamor-view-collection-of-assessments-assess">
        <span className="jonas-angelo-clamor-view-collection-of-assessments-assess-text">
          <span>ASSESSMENTS TO BE ANSWERED:</span>
        </span>
        <span className="jonas-angelo-clamor-view-collection-of-assessments-assess-text02">
          <span>
            <span>COURSE DESCRIPTION:</span>
            <br></br>
            <span></span>
          </span>
        </span>
        <span className="jonas-angelo-clamor-view-collection-of-assessments-assess-text07">
          <span>
            CS313 AUTOMATA THEORY AND FORMAL LANGUAGES
          </span>
        </span>
        <span className="jonas-angelo-clamor-view-collection-of-assessments-assess-text09">
          <span>Regular Expression Quiz</span>
        </span>
        <span className="jonas-angelo-clamor-view-collection-of-assessments-assess-text11">
          <span>NFA Quiz</span>
        </span>
        <span className="jonas-angelo-clamor-view-collection-of-assessments-assess-text13">
            <span>
            The study of abstract machines and automata, as well as the computational issues may be used to
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>
            address, is known as automata theory. It is a theoretical computer science theory. Formal language theory
            </span>
            <br></br>
            <span>
            and automata theory are closely related disciplines. Automata are used as finite representations of formal
            </span>
            <br></br>
            <span>
            languages, which may be infinite, in this context. Automata theory's primary objective is to offer methods
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>
            enabling computer scientists to design and assess the dynamic behavior of discrete systems.
          </span>
        </span>
        <span className="jonas-angelo-clamor-view-collection-of-assessments-assess-text24">
          <span>CFG Long Quiz</span>
        </span>
        <img
          src={shield}
          alt="shield1192"
          className="jonas-angelo-clamor-view-collection-of-assessments-assess-shield1"
        />
        <img
          src={shield}
          alt="shield2193"
          className="jonas-angelo-clamor-view-collection-of-assessments-assess-shield2"
        />
        <img
          src={shield}
          alt="shield3194"
          className="jonas-angelo-clamor-view-collection-of-assessments-assess-shield3"
        />
        <img
          src={checkbox}
          alt="emptycheckbox1195"
          className="jonas-angelo-clamor-view-collection-of-assessments-assess-emptycheckbox1"
        />
        <img
          src={checkbox}
          alt="emptycheckbox2196"
          className="jonas-angelo-clamor-view-collection-of-assessments-assess-emptycheckbox2"
        />
        <img
          src={checkbox}
          alt="emptycheckbox3197"
          className="jonas-angelo-clamor-view-collection-of-assessments-assess-emptycheckbox3"
        />
        <div className="jonas-angelo-clamor-view-collection-of-assessments-assess-group44">
        </div>
        </div>
        <hr
        className='jonas-angelo-clamor-view-collection-of-assessments-assess-line14'
        style={{
          background: 'black',
          color: 'black',
          borderColor: 'black',
          height: '3px',
        }}
        />
        <img
          src={game}
          alt="MinimalistQuotePoster41105"
          className="jonas-angelo-clamor-view-collection-of-assessments-assess-minimalist-quote-poster4"
        />
        <img
          src={gamify}
          alt="MinimalistQuotePoster51106"
          className="jonas-angelo-clamor-view-collection-of-assessments-assess-minimalist-quote-poster5"
        />
        <span className="jonas-angelo-clamor-view-collection-of-assessments-assess-text26">
          <span>List Of Subjects</span>
        </span>
        <span className="jonas-angelo-clamor-view-collection-of-assessments-assess-text28">
          <span>
            <span>
              Assessments To
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>Be Answered</span>
          </span>
        </span>
        <span className="jonas-angelo-clamor-view-collection-of-assessments-assess-text33">
          <span>
            <span>Input Assessment</span>
            <br></br>
            <span>Code</span>
          </span>
        </span>
        <hr
        className='jonas-angelo-clamor-view-collection-of-assessments-assess-line8'
        style={{
          background: 'black',
          color: 'black',
          borderColor: 'black',
          height: '3px',
        }}
        />
        <hr
        className='jonas-angelo-clamor-view-collection-of-assessments-assess-line7'
        style={{
          background: 'black',
          color: 'black',
          borderColor: 'black',
          height: '3px',
        }}
        />
        <img
          src={evaluate}
          alt="evaluation11112"
          className="jonas-angelo-clamor-view-collection-of-assessments-assess-evaluation1"
        />
        <img
          src={todolist}
          alt="todolist11113"
          className="jonas-angelo-clamor-view-collection-of-assessments-assess-todolist1"
        />
        <img
          src={input}
          alt="input11114"
          className="jonas-angelo-clamor-view-collection-of-assessments-assess-input1"
        />
        <hr
        className='jonas-angelo-clamor-view-collection-of-assessments-assess-line24'
        style={{
          background: 'black',
          color: 'black',
          borderColor: 'black',
          height: '3px',
        }}
        />
        <span className="jonas-angelo-clamor-view-collection-of-assessments-assess-text38">
          <span>
            <span>Jonas Angelo B. Clamor BSCS-3 | CSIT321 F1 - C0</span>
            <br></br>
            <span></span>
          </span>
        </span>
        <img
          src={arrow}
          alt="Arrow21117"
          className="jonas-angelo-clamor-view-collection-of-assessments-assess-arrow2"
        />
        <div
            src="/playground_assets/rectangle61101-qm2q.svg"
            alt="Rectangle61101"
            className="jonas-angelo-clamor-view-collection-of-assessments-assess-rectangle61"
            onClick={proceedAssessmentFour}
          />
        <div
        src="/playground_assets/rectangle61101-qm2q.svg"
        alt="Rectangle61102"
        className="jonas-angelo-clamor-view-collection-of-assessments-assess-rectangle62"
        onClick={proceedAssessmentFive}
        />
        <div
        src="/playground_assets/rectangle61101-qm2q.svg"
        alt="Rectangle61103"
        className="jonas-angelo-clamor-view-collection-of-assessments-assess-rectangle63"
        onClick={proceedAssessmentSix}
        />
    </div>
  )
}

export default Automata;
