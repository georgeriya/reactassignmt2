import React from 'react';

import './QuestionContainer.css';
import QuestionAnswer from '../QuestionAnswer/QuestionAnswer.react';

const QuestionContainer = () => {

    return (
        <div className='questioncontainer_wrapper'>
            <QuestionAnswer></QuestionAnswer>
        </div>
    );

}

export default QuestionContainer;