import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchContainer from './SearchContainer/SearchContainer.react';
import QuestionContainer from './QuestionContainer/QuestionContainer.react';
import ProfileContainer from './ProfileContainer/ProfileContainer.react';
import QuestionData from './QuestionData/QuestionData.react';
import FetchSearchResults from './FetchSearchResults/FetchSearchResults.react';

function App() {
  return (
    <div className="App">
      <SearchContainer></SearchContainer>
      <QuestionData></QuestionData>
     
      
    </div>
  );
}

export default App;
