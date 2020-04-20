import React,{Component} from 'react' 
import {Link} from 'react-router-dom'
import helloWorldService from '../api/todo/helloWorldService.js'
class WelcomeComponent extends Component{
    constructor(props){
      super(props)
      this.state={
        welcomeMessage: ''
      }
      this.retrieveMessage=this.retrieveMessage.bind(this)
      this.handleMessage=this.handleMessage.bind(this)
      this.handleError=this.handleError.bind(this)
     
    }
    render (){
        return (
            <>
            <div className="container">
            <h1> welcome </h1>
             MR <strong><Link  to="/todos">{this.props.match.params.name}</Link></strong> check your Todo List
              </div>

              <div className="container">
           
             MR <strong>{this.props.match.params.name}</strong> click here to get a customized welcome message
              <button className="btn btn-success" onClick={this.retrieveMessage}>Message</button>
              </div>
              <div className="container " >
                <h1> {this.state.welcomeMessage}</h1>
              </div>
            </>
        );
    }
    

    retrieveMessage(){
        helloWorldService.excuteHelloWorldVariable(this.props.match.params.name)
        .then(response =>this.handleMessage(response))
        .catch(error =>this.handleError(error))
    }
    handleMessage(response){
      this.setState({
          welcomeMessage: response.data
      })
    }
    handleError(error){
    console.log(error.response.data.message)
    this.setState({
        welcomeMessage:error.response.data.message
    })
    }
   
}
export default WelcomeComponent