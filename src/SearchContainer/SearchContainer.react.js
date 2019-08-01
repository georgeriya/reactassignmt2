import React from 'react';

import './SearchContainer.css';
// import Search from '../Search/Search.react';
import FetchSearchResults from '../FetchSearchResults/FetchSearchResults.react';
import QuestionData from '../QuestionData/QuestionData.react';
//same as datagrid
const SearchContainer = () => {

    return (
        <div className='searchcontainer_wrapper'>
             <h3>StackOverFlow Search</h3>
             <h1>Questions</h1>
                <a href='/fetchsearchresults'>Back to Search</a>
             <FetchSearchResults>
             
             </FetchSearchResults>
             
     
        </div>
    );

}

export default SearchContainer;