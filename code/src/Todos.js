import React, { Component } from 'react';
import Login from "./Login.js";
import { Route, Link} from 'react-router-dom';
// import loginUser from "./Loginuser.js";


class Todoslogin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email:'',
            password:'',
            arr:JSON.parse(localStorage.getItem("userData")) || [],
            loginstatus:false,
            loginUser:""
            
        }
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeName=(e)=> {
      this.setState({
        name: e.target.value
      })  
    }
  
    onChangePassword=(e)=>{
        this.setState({
          password: e.target.value
        })
      }

      
      Logout=()=>{
        console.log(this.props.history)
        this.props.history.push('/');         
       }
  
    onSubmit(e) {
      e.preventDefault();
      this.state.arr.map((val,index)=>{       
        if(val.name.includes(this.state.name)===true && val.password.includes(this.state.password)===true)
           //return(<Redirect to ='/Login' />)
           
          {
            this.setState({
              loginstatus:true,
              loginUser:this.state.name
            })
            //return (this.props.history.push('/login'))
          }
          // return (<Redirect to="/Login"/>);
          //console.log("login successfull");
          
          //return (window.location.href="./c/Users/mousumi/Desktop/Assaignment/client/src/Login")   
          //  else{
          //    alert("Enter Valid data")
          //  }        
     })

      this.setState({
            name: '',
            email:'',
            password:'',
            
                
      })
    }
   
    render() {
     console.log(this.state.loginUser)
     console.log(this.state.loginstatus)
     if(this.state.loginstatus){
       //window.location.href='/Login'
      return (
              <div>
              <Link to="/login">Enter your Todo</Link>
              <p className="logintextstyle">Welcome {this.state.loginUser}</p>
              <Route path="/login" component={Login}/>
              <button className="floatright" onClick={this.Logout}>Logout</button>
              
              
            </div>
          )     
     }
     else{
       return (
            <div>
              <form onSubmit={this.onSubmit}>
              <div>
                  <label>Enter Your Username:  </label>
                  <input type="text"  value={this.state.name} onChange={this.onChangeName} />
              </div>
              <div >
                  <label>Enter Your password:  </label>
                  <input type="password"  value={this.state.password} onChange={this.onChangePassword} />
              </div>
              <div >
                  <input type="submit"  />
              </div>
          </form> 
             {/* <Login/>  */}
             
          </div>
       ) 
      }
     }    
}
  
  export default Todoslogin