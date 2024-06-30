import axios from "axios";

const $http = axios.create({
    baseURL: 'https://reqres.in/api/',
    headers: {
      "Access-Control-Allow-Methods": "GET,HEAD,PATCH,POST,PUT",
    }
})
  
export {$http}