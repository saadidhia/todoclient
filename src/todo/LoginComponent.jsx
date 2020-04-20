import React,{Component} from 'react' 

import authenticationService from './authenticationService.js'


class LoginComponent extends Component {

    constructor(props){
        super (props)
        this.state={
            username : "dhia",
            password : "",
            hasLoginFailed:false,
            showMessageSucces:false
        }
       
        this.changenamesynchronize=this.changenamesynchronize.bind(this)
        this.buttonClicked=this.buttonClicked.bind(this)
    }


   changenamesynchronize(event){
       console.log(this.state);
       this.setState({
           [event.target.name]:event.target.value
       })

   }

   buttonClicked(){
       
  if(this.state.username==="dhia" && this.state.password==='25753611'){
      console.log('Authenticated')
      authenticationService.registerSucccessfulLogin(this.state.username,this.state.password);
      this.props.history.push(`/welcome/${this.state.username}`)
      console.log('true')
      this.setState({
            hasLoginfailed:false,
            showMessageSucces:true
      })
  }else{
      console.log('false')
      this.setState({
          hasLoginFailed:true})
          this.setState({
            showMessageSucces:false})
  }
   }
  
    render (){
        return(
            <>

            
           {/* <Credentials   hasLoginFailed={this.state.hasLoginFailed}/>*/}
           { this.state.showMessageSucces && <h1>valid</h1>}
           <div className="alert-warning">   { this.state.hasLoginFailed &&  <h1>invalid</h1>} </div>
            <div> 
                <h1 className="mt-3">Login page</h1>
            
                
                
            <strong className="mr-1"> username : </strong>
            <input type="text" name="username" defaultValue={this.state.username} onChange={this.changenamesynchronize}/>
            <strong className="ml-3 mr-1">password :</strong> 
            <input type="password" name="password" defaultValue={this.state.password}  onChange={this.changenamesynchronize}/>
               <button className="button btn btn-success ml-2" onClick={this.buttonClicked}>Login</button>
            </div>
            </>
            
        );

    }
}

export default LoginComponent