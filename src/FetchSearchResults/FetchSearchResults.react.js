import React from 'react';
import ShowUserProfile from '../ShowUserProfile/ShowUserProfile.react';
import './FetchSearchResults.css';
import { taggedTemplateExpression } from '@babel/types';

class FetchSearchResults extends React.Component {
    url="http://api.stackexchange.com/2.2/questions?order=desc&sort=activity&tagged=";
    constructor(props) {
        super(props);
        this.state = {questionList:[{}],
        loaded:false,
        tagName:""
    }
    }
    onClickSubmit=()=>{
         
        fetch(this.url + this.state.tagName + "&site=stackoverflow").then(data=>data.json())
        .then(questionList=>this.setState({questionList:questionList,loaded:true}));
     }
     onChangeofInputField =(event)=>{
       this.setState({tagName: event.target.value})
     }
    render() {
        if(!this.state.loaded){
        return (
            <div className='fetchsearchresults_wrapper'>
                <input onChange={this.onChangeofInputField} value={this.state.tagName}></input>
                    <button onClick={this.onClickSubmit}>Search</button>
            </div>
        );
    }else{
        return(
        this.state.questionList.items.map(eachValue=> {
            if(eachValue.tags.includes(this.state.tagName)){
        return (
            <div className="container">
                
            <div className="card bg-light row">
                <div className="card-body">
                <span className="float-left">
                    
                   
                                <p>{eachValue.title}</p>
                                <p>by {eachValue.owner.display_name}</p>
                                <img className="float-left" src={eachValue.owner.profile_image} alt="profile_pic"></img>
                                <p>Votes: {eachValue.score}</p>
            </span></div></div>
            <ShowUserProfile questionList ={this.state.questionList}/>
            </div>
        )}
    }))
}
}
}
       
    

export default FetchSearchResults;