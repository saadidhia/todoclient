class authenticationService{

    registerSucccessfulLogin(username,password){
         sessionStorage.setItem('authenticatedUser',username)

    }

    logout(){
        console.log('logout')
        sessionStorage.removeItem('authenticatedUser')
    }

    isUserLoggedIn(){
        let user =sessionStorage.getItem('authenticatedUser')
           if(user===null) return false;
        
        return true;
        }
    }


export default new authenticationService()