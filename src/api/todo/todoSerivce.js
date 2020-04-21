import axios from 'axios'
class todoSerivce{

retrievetodos(name){

    return axios.get(`http://localhost:8080/users/${name}/todos/`)
}

removetodoService(name,id){
    return axios.delete(`http://localhost:8080/users/${name}/todos/${id}`)
}

}
export default new todoSerivce()