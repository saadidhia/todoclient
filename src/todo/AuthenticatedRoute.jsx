import React,{Component} from 'react'
import authenticationService from './authenticationService.js'
import {Route,Redirect} from 'react-router-dom'

class AuthenticatedRoute extends Component{
    render(){
        
            if (authenticationService.isUserLoggedIn() ){
               return  <Route {...this.props} />
            }else {
              return  <Redirect to="/login" />
            }
            
    }
}

export default AuthenticatedRoute