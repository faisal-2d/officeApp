import axios from "axios";
import { useEffect, useState } from "react";

const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(()=> {
        const userEmail = user?.email;        
        if(userEmail){                       
            axios.get(`${process.env.REACT_APP_BACKEND_API}/users/isadmin/${userEmail}`)
            .then(data => {
                setAdmin(data.data.isAdmin);
                setIsLoading(false);                
            })
        }

    } ,[user])
    return [admin, isLoading];
}
export default  useAdmin;
