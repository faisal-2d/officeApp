import axios from "axios";
import { useEffect, useState } from "react";

const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(()=> {
        const userEmail = user?.email;        
        if(userEmail){                       
            axios.get(`https://alharamanin-backend-web.onrender.com/users/isadmin/${userEmail}`)
            .then(data => {
                setAdmin(data.data.isAdmin);
                setIsLoading(false);                
            })
        }

    } ,[user])
    return [admin, isLoading];
}
export default  useAdmin;
