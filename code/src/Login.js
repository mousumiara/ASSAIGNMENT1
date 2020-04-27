import React from 'react';
import Todoform from './Todoform.js';
import './App.css';


export default class Login extends React.Component{
    constructor(props){
        super(props)
        
        this.state={
           
        }
    }
 
    render(){
        return(
            <React.Fragment>
                <div className="logintextstyle">login Successful !</div>
                <Todoform/>
            </React.Fragment>
        )
    }
}