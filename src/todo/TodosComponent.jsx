import React,{Component} from 'react' 


class TodoComponent extends Component{

    constructor(props){
        super(props)
        this.state={
            todos: [{id:1,description:'My homeWork',done:true,targetDate: new Date()},
            {id:2,description:'My homeWork23',done:true,targetDate: new Date()},
            {id:3,description:'My homework24 ' ,done:true,targetDate: new Date()}
            ]
        }

    }
    render(){
    return ( 
        <>
        <h1>Welcome </h1>
        <div className="container">
            
          <table className="table">
              <thead>
                  <tr>
                      
                      <th>Description</th>
                      <th>Done</th>
                      <th>targetDate</th>
                  </tr>
              </thead>
              <tbody>
                  {
                      this.state.todos.map(todo=>
                  <tr hey={todo.id}> 
                  
                      <th>{ todo.description}</th>
                      <th>{todo.done.toString()}</th>
                      <th>{todo.targetDate.toString()}</th>

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