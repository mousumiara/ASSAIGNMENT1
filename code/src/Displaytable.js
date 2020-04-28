import React, { Component } from 'react';
import "./App.css";
import {Link} from "react-router-dom";


export default class Displaytable extends Component {
    constructor(props){
        super(props);
            // localStorage.setItem("userData",'')
            //console.log('props',this.props.match.params.id)
        this.state ={
            
            arrData:JSON.parse(localStorage.getItem("userData"))
        }
    }
    Delete = (id)=> {
        console.log(id);
       // const ite = JSON.parse(localStorage.getItem("userData"));
       // console.log(this.state.match.params.id);
       this.setState({
        arrData:this.state.arrData.map((val,index)=>{
         if(index===id){
            this.state.arrData.splice(id,1);
         }
        })
       })   
       // console.log(this.state.arrData);
       localStorage.setItem('userData', JSON.stringify(this.state.arrData))
      }
    
    
    render() {
        //console.log(this.props.arr);
        if(!localStorage.getItem('userData'))
            localStorage.setItem('userData',null)
        const ite = JSON.parse(localStorage.getItem("userData"));
        //console.log(JSON.parse(ite));
        console.log(ite);
        
       
        return (
            <div>
                <div>
                 <table>
                 <thead>
                 <tr>
                     <th>Username</th>
                     <th>Email</th>
                     <th>Edit</th>
                     <th>Delete</th>
                 </tr>
                </thead>
               <tbody>
                    {ite?(
                    ite.map((val,index)=>{
                        return(
                            <tr>
                        
                            <td>{val.name}</td>
                            <td>{val.email}</td>
                            <td><Link to={`/edit${index}`} >Edit</Link></td>  
                            <td> <button className="deletebtn" onClick={() => this.Delete(index)}>
                                Delete
                            </button></td>
                            </tr>
                        )
                    })):<div></div>}             
                  </tbody>  
                 </table>          
                </div>
            </div>
        )
    }
}