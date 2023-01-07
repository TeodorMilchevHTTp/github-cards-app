import axios from "axios";

export async function getAPI(userName){

    return await axios.get(`https://api.github.com/users/${userName}`) 
} 


