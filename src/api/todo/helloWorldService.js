import axios from 'axios'
class helloWorldService {

    executeHelloWorldService(){
    
        return  axios.get('http://localhost:8080/document/helloworld')
    }

    excuteHelloWorldVariable(name){
        return axios.get(`http://localhost:8080/document/helloworld/${name}`)
    }

   
}
export default new helloWorldService()