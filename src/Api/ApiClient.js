import axios from "axios";
import queryString from 'query-string'
import apiConfig from "./ApiConfig";

const axioClient=axios.create({
    baseURL:apiConfig.baseurl,
    headers:{
        'Content-Type':'application/json'
    },
    paramsSerializer:params=>queryString.stringify({...params,api_key:apiConfig.apikey})

});
axioClient.interceptors.request.use(async (config)=>config);

axioClient.interceptors.response.use((response)=>{
    if(response &&response.data){
        return response.data;
    }
    return response;
},(error)=>{
    throw error;
})
export default axioClient;
