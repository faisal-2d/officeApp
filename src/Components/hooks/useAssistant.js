import axios from "axios";
import { useEffect, useState } from "react";

const useAssistant = (user) => {
    const [assistant, setAssistant] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(()=> {
        const userEmail = user?.email;        
        if(userEmail){                       
            axios.get(`${process.env.REACT_APP_BACKEND_API}/users/isassistant/${userEmail}`)
            .then(data => {
                setAssistant(data.data.isAssistant);
                setIsLoading(false);                
            })
        }

    } ,[user])
    return [assistant, isLoading];
}
export default  useAssistant;
