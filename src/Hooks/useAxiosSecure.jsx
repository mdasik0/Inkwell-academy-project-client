import axios from "axios";
import { useEffect } from "react";
import Swal from "sweetalert2";

const axiosSecure = axios.create({
    baseURL: `http://localhost:5000`,
})
const useAxiosSecure = () => {
  useEffect(()=> {
    axiosSecure.interceptors.request.use((req)=> {
        const token = localStorage.getItem('access-token');
        if(token){
            req.headers.Authorization = `Bearer ${token}`
        }
        return req;

    });
  }, [])

  axiosSecure.interceptors.response.use(
    response => response,
    error => {
        if(error.response && (error?.response?.status === 403 || error?.response.status === 401)){
            Swal.fire(
                "Sent!",
                `${error?.response?.data?.error}`,
                "error"
              );
        }
    }
  )
  
  
  
  
    return axiosSecure;
};

export default useAxiosSecure;