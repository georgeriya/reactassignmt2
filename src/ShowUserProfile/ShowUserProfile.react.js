import React from 'react';
import face from '../face.png';
import './ShowUserProfile.css';

import Profile from '../Profile/Profile.react';

class ShowUserProfile extends React.Component {
    
    constructor(props) {
        super(props);
        this.state={
            action:"results",
            pass:{}
        }
    }

    userFunction(object){
        this.setState({pass:object,action:"user"});

    }

    // questionFuncton(obj){
    //     this.setState({passObject:obj,action:"questions"});
    // }

    render() {
        if(this.state.action==="results"){
        return (
            this.props.questionList.items.map((eachQuestion)=>{
                return(
                    <div className='showuserprofile_wrapper'>
                        {/* <div className="container">
                            <div className="card bg-light row">*/}
                                <div className="card-body"> 
                                    <span className="float-left">
                                        {eachQuestion.score}
                                    </span>
                                    <span className="float-right">
                                        <img onClick={()=>{this.setState({pass: eachQuestion.owner,action: "user"})}} className="rounded" src = {eachQuestion.owner.profile_image} alt="AuthorDP" width="100"/>
                                    </span>
                                    <p className='font-weight-bold' onClick={()=>{this.setState({pass: eachQuestion,action: "question"})}}>{eachQuestion.title}</p>
                                    <p className="text-muted">by {eachQuestion.owner.display_name}</p>
                                   
                                    
                               
                             </div>
                             {/* </div>  */}
                        {/* </div> */}
                        </div>
                );
            })
            );
            }
            else if(this.state.action==="user"){
                return(
                    <div>
                        <Profile owner = {this.state.pass}></Profile>
                    </div>
                );
            }
        }
    }
          
            


export default ShowUserProfile;