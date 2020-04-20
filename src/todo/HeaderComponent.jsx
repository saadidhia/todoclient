import React,{Component} from 'react' 
import { Link} from 'react-router-dom'
import authenticationService from './authenticationService.js'
class HeaderComponent extends Component{
    render(){
        const isuserLoggedIn =authenticationService.isUserLoggedIn();
        console.log(isuserLoggedIn)
        return (
            <div>
                <header>
                    <nav className="navbar  navbar-expand-md navbar-dark bg-dark">
                        
                       <div className="navbar-brand"> <a href="https:\\www.google.com">28 minutes</a></div>
                        <ul className="navbar-nav">
                           { isuserLoggedIn && <li  ><Link className="nav-link" to="/welcome/in28minutes"> Home</Link></li>}
                           { isuserLoggedIn && <li  ><Link className="nav-link" to="/todos"> Todo</Link></li>}
                        </ul>
                        <ul className="navbar-nav navbar-collapse justify-content-end">
                            { !isuserLoggedIn && <li  ><Link className="nav-link" to="/login"> Login</Link></li>}
                           { isuserLoggedIn && <li  ><Link className="nav-link" to="/logout" onClick={authenticationService.logout}> Logout</Link></li>}
                        </ul>
                        
                    </nav>
                </header>
            </div>
        );
    }
    
    
}

export default HeaderComponent