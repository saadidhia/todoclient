import axios from 'axios'
class todoSerivce{

retrievetodos(name){

    return axios.get(`http://localhost:8080/users/${name}/todos/`)
}

removetodoService(name,id){
    return axios.delete(`http://localhost:8080/users/${name}/todos/${id}`)
}

retrievetodo(name,id){
   return axios.get(`http://localhost:8080/users/${name}/todos/${id}`)
}


updatetodo(name,id,todo){
    return axios.put(`http://localhost:8080/users/${name}/todos/${id}`,todo)
}

createtodo(name,todo){
    return axios.post(`http://localhost:8080/users/${name}/todos`,todo)
}

}
export default new todoSerivce()