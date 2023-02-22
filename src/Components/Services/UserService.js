// import axios from "axios"
const BASE_URL="http://localhost:8000/api";

class UserServices{
    saveuser(){
    fetch(BASE_URL+'/books')
    .then( (response) =>{
        console.log(response);
      })
    .catch(err => {
        console.log('error occured' + err)
    })
       
    }
}    

export default new UserServices();