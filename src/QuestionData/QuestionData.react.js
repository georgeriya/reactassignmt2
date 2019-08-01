import React from 'react';

import './QuestionData.css';
import FetchQuestions from '../FetchQuestions/FetchQuestions.react';

const QuestionData = () => {

    return (
        <div className='questiondata_wrapper'>
           {/* <h3>Questions</h3>
           <a href='/fetchsearchresults'>Back to Search</a> */}
           <FetchQuestions></FetchQuestions>
        </div>
    );

    }
export default QuestionData;