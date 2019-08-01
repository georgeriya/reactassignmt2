import React from 'react';

import './FetchQuestions.css';
import QuestionData from '../QuestionData/QuestionData.react';

import ShowUserProfile from '../ShowUserProfile/ShowUserProfile.react';

var i = 0;
//ar numrows=10;
//same as fetchdonors

class FetchQuestions extends React.Component {
    url="http://api.stackexchange.com/2.2/questions?order=desc&sort=activity&site=stackoverflow";
    constructor(props) {
        super(props);
        this.state = {questionList:[{}],
        loaded:false}
    }
    componentDidMount(){
        
        fetch(this.url).then(data=>data.json()).
        then(questionList=>
            {this.setState({questionList,loaded:true})
    });
    }


    render() {
        
        if(!this.state.loaded){
        return (
            <div className='fetchquestions_wrapper'>
                 <h1>Loading</h1>
            </div>);
        }
    else {
        return (
            this.state.questionList.items.map(eachValue=> {
                return (
                    <div className="container">
                        <div className="card bg-light row">
                            <div className="card-body">
                            <span className="float-left">
                                <p>{eachValue.title}</p>
                                <p>by{eachValue.owner.display_name}</p>
                                <p>{eachValue.owner.user_id}</p>
                               
                                <img className="float-left" src={eachValue.owner.profile_image} alt="profile_pic"></img>
                                <p>Votes: {eachValue.score}</p>
            </span></div></div>
            
            </div>

            
                )
            })
            );
            // console.log(this.state.questionList);
            // return(
            //     <div>

            //     </div>
            // );
    }
}}
   
export default FetchQuestions;