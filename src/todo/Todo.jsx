import React,{Component} from 'react' 
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import AuthenticatedRoute from './AuthenticatedRoute'
import LoginComponent from './LoginComponent'
import TodoComponent from './TodosComponent'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import WelcomeComponent from './WelcomeComponent'
import LogoutComponent from './LogoutComponent'



class Todo extends Component{

 render(){
     return (
        <Router>
            <HeaderComponent/>
            <Switch>
        <Route path="/" exact component={LoginComponent} />
        <Route path="/login"  component={LoginComponent} />
        <AuthenticatedRoute path="/todos"  component={TodoComponent} />
        <AuthenticatedRoute path="/logout" component={LogoutComponent} />
        <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent} />
        
       

        <Route  component={Error} />
        </Switch>
        <FooterComponent/>
    </Router>
     );
     
 }


}

function Error (){
    return <h1>Error page</h1>
}













/*function Credentials(props){
    if (props.hasLoginFailed){
        return <h1>not authenticate</h1>
    }
    return null
}


function ShowLoginSuccessfull(props){
    if (props.showMessageSucces){
        return <h1>Authenticated</h1>
    }

    return null
}*/

export default Todo