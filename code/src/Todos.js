import React, { Component } from 'react';
import Login from "./Login.js";
import { Route, Link,withRouter} from 'react-router-dom';


class Todoslogin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email:'',
            password:'',
            arr:JSON.parse(localStorage.getItem("userData")) || [],
            loginstatus:false
            
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
     

    onSubmit(e) {
      e.preventDefault();
      this.state.arr.map((val,index)=>{       
        if(val.name.includes(this.state.name)===true && val.password.includes(this.state.password)===true)
           //return(<Redirect to ='/Login' />)
           
          {
            this.setState({
              loginstatus:true
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
     //console.log(this.state.arr)
     console.log(this.state.loginstatus)
    //  if(this.state.loginstatus){
    //    //window.location.href='/Login'
    //   return (
    //           <div>
    //           {/* <Link to="/login"></Link> */}
    //           <Route path="/login" component={Login}/>
    //         </div>
    //       )     
    //  }
     //else{
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
    
  
  export default withRouter(Todoslogin)