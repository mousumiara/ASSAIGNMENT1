import React, { Component } from 'react';


export default class Todoform extends Component {
    constructor(props) {
        super(props);
  
        this.state = {
            todoname: '',
            todotype:'',
            arr:JSON.parse(sessionStorage.getItem("todoData")) || []      
        }
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeTodo=(e)=> {
      this.setState({
        todoname: e.target.value
      })  
    }
    onChangeTodotype=(e)=> {
      this.setState({
        todotype: e.target.value
      })
    }

    Delete = (id)=> {
       // console.log(this.state.match.params.id);
       this.setState({
        arr:this.state.arr.map((val,index)=>{
           // console.log(index);
         if(index===id){
            this.state.arr.splice(id,1);
         }
        })
       })
       
       // console.log(this.state.arr);
       sessionStorage.setItem('todoData', JSON.stringify(this.state.arr))
      }

    onSubmit(e) {
      e.preventDefault();
     // console.log(this.state.code , this.state.name ,this.state.email)
      const data={todoname:this.state.todoname,todotype:this.state.todotype}
      const arr=[...this.state.arr, data];
      const json=JSON.stringify(arr);
      sessionStorage.setItem("todoData",json);
          
      this.setState({
            todoname: '',
            todotype:'',
            arr:arr
      })
    }
   
    render() {
     console.log(this.state.arr);
        return (
            <div>
                   <form onSubmit={this.onSubmit}>
                       <select value={this.state.todotype} onChange={this.onChangeTodotype}>
                           <option>Select</option>
                           <option value="Birthday">Birthday</option>
                           <option value="Marriage">Marriage</option>
                           <option value="Familyfunction">familyfunction</option>
                       </select>
                    <div>
                        <label>Enter Todo:  </label>
                        <input type="text"  value={this.state.todoname} onChange={this.onChangeTodo} />
                    </div>
                    <div > 
                        <input type="submit" />
                    </div>
                </form> 
                {this.state.arr.map((val,index)=>{
                    return(
                    <div className="todostyle">
                    <h3>{val.todotype}</h3>
                    <p>{val.todoname}</p>
                    <button className="deletebtn" onClick={() => this.Delete(index)}>
                                Delete
                            </button>
                    </div>
                    )
                })}
            </div>
        )
    }
  }