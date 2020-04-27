import React, { Component } from 'react';


export default class Userform extends Component {
    constructor(props) {
        super(props);
  
        this.state = {
            name: '',
            email:'',
            password:'',
            arr:JSON.parse(localStorage.getItem("userData")) || []        
        }
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeName=(e)=> {
      this.setState({
        name: e.target.value
      })  
    }
    onChangeEmail=(e)=> {
      this.setState({
        email: e.target.value
      })
    }
    onChangePassword=(e)=> {
        this.setState({
          password: e.target.value
        })
      }

    onSubmit(e) {
      e.preventDefault();
     // console.log(this.state.code , this.state.name ,this.state.email)
      const data={name:this.state.name,email:this.state.email,password:this.state.password}
      const arr=[...this.state.arr, data];
      const json=JSON.stringify(arr);
      localStorage.setItem("userData",json);
          
      this.setState({
            name: '',
            email:'',
            password:'',
            arr:arr
      })
    }
   
    render() {
     // console.log(this.state.arr);
        return (
            <div>
                   <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Enter Username:  </label>
                        <input type="text"  value={this.state.name} onChange={this.onChangeName} />
                    </div>
                    <div>
                        <label>Enter Email:  </label>
                        <input type="text"  value={this.state.email} onChange={this.onChangeEmail} />
                    </div>
                    <div >
                        <label>Enter Password:  </label>
                        <input type="password"  value={this.state.password} onChange={this.onChangePassword} />
                    </div>
                    <div >
                        <input type="submit" />
                    </div>
                </form>
               
            </div>
        )
    }
  }