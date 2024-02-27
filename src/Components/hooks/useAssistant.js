import axios from "axios";
import { useEffect, useState } from "react";

const useAssistant = (user) => {
    const [assistant, setAssistant] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(()=> {
        const userEmail = user?.email;        
        if(userEmail){                       
            axios.get(`https://alharamanin-backend-web.onrender.com/users/isassistant/${userEmail}`)
            .then(data => {
                setAssistant(data.data.isAssistant);
                setIsLoading(false);                
            })
        }

    } ,[user])
    return [assistant, isLoading];
}
export default  useAssistant;
