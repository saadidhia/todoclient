import axios from 'axios'
class helloWorldService {

    executeHelloWorldService(){
    
        return  axios.get('http://localhost:8080/helloworld')
    }

    excuteHelloWorldVariable(name){
        return axios.get(`http://localhost:8080/helloworld/${name}`)
    }

   
}
export default new helloWorldService()