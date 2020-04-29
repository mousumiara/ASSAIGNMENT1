import React, { Component } from 'react';




export default class Editform extends Component {
    constructor(props) {
        super(props);
  
        this.state = {
            name: '',
            email:'',
            password:'',
            newarr: JSON.parse(localStorage.getItem("userData"))
        }
        //console.log(this.props.match.params.id);
        //this.onChangeName = this.onChangeName.bind(this);
        // this.onChangeEmail = this.onChangeEmail.bind(this);
        //this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
 
    onChangeName=(e)=>{
      this.setState({
        name: e.target.value
      })  
    }
    onChangeEmail=(e)=>{
      this.setState({
        email: e.target.value
      })
    }
    onChangePassword=(e)=>{
        this.setState({
          password: e.target.value
        })
      }
      
  
    onSubmit(e) {
      e.preventDefault();
      this.setState({
        newarr:this.state.newarr.map((val,index)=>{
          if(index===parseInt(this.props.match.params.id)){
            val.name=this.state.name;
            val.email=this.state.email;
            val.password=this.state.password;       
          }})

      })
      
        localStorage.setItem('userData',JSON.stringify(this.state.newarr))
    }
    
   
    render() {
     //console.log(this.state.newarr[index].name);
        return(
            <div>

           {
            this.state.newarr.map((val,index)=>{
                if(index===parseInt(this.props.match.params.id)){
                    return (
                        <div>
                               <form onSubmit={this.onSubmit}>
                                <div>
                                    <label>Enter Your Name:  </label>
                                    <input type="text" placeholder={this.state.newarr[index].name} value={this.state.name} onChange={this.onChangeName} />
                                </div>
                                <div>
                                    <label>Enter Your Email:  </label>
                                    <input type="text" placeholder={this.state.newarr[index].email} value={this.state.email} onChange={this.onChangeEmail} />
                                </div>
                                <div>
                                    <label>Enter Your Password:  </label>
                                    <input type="password" placeholder={this.state.newarr[index].password} value={this.state.password} onChange={this.onChangePassword} />
                                </div>
                             
                                <div>
                                    <input type="submit" />
                                </div>
                            </form>
                           
                        </div>
                    )
    
                }
    
            })
           
        }
         </div>
         )
    }
  }