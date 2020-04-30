import React from 'react';
import Todoform from './Todoform.js';
import './App.css';
// import {withRouter,useHistory,Link} from 'react-router'
// import { browserHistory} from 'react-router';



class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
           
        }
    }


  
 
    render(){
        return(
            <React.Fragment>           
                {/* <div className="logintextstyle">login Successful !</div> */}
                <Todoform/>
                
            </React.Fragment>
        )
    }
}
export default Login