import React,{Component} from 'react' 
import todoService from '../api/todo/todoSerivce'
import authenticationService from './authenticationService.js'
import updatetodoComponent from './updatetodoComponent'


class TodoComponent extends Component{

    constructor(props){
        super(props)
        this.state={
            todos: []  ,
            message: null
        }
        this.removetodo=this.removetodo.bind(this)
        this.refreshtodo=this.refreshtodo.bind(this)
        this.updatetodo=this.updatetodo.bind(this)

    }
     componentDidMount(){
         this.refreshtodo();
     }

     refreshtodo(){
        let username=authenticationService.isUserLoggedIn();
        todoService.retrievetodos(username)
        .then(response=>{
            
            this.setState({
                todos:response.data
            })
        })
     }

     updatetodo(id){
         console.log('updated')
         this.props.history.push(`/todos/${id}`)
     }

     removetodo(id){
        let username=authenticationService.isUserLoggedIn();
         todoService.removetodoService(username,id)
         .then(
             response=>{
                 this.setState({
                     message:`success of to do ${id}`})
                     this.refreshtodo();
             }
         )
     }

    render(){
    return ( 
        <>
        <h1>Welcome </h1>
        <div className="container">
        {this.state.message && <div className="alert alert-success"> {this.state.message} </div>}
          <table className="table">
              <thead>
                  <tr >
                      
                      <th>Description</th>
                      <th>Done</th>
                      <th>targetDate</th>
                      <th>Update</th>
                      <th>Delete</th>
                  </tr>
              </thead>
              <tbody>
                  {
                      this.state.todos.map(todo=>
                  <tr key={todo.id}> 
                  
                      <td>{ todo.description}</td>
                      <td>{todo.done.toString()}</td>
                      <td>{todo.targetDate.toString()}</td>
                      <td><button className="btn" onClick={()=>this.updatetodo(todo.id)}>Update</button></td>
                      <td><button className="btn btn-danger"  onClick={() =>this.removetodo(todo.id)}>Delete</button></td>

                  </tr>
                 )
                  }
              </tbody>

          </table>
          </div>
          </>
    )   
    }
}

export default TodoComponent