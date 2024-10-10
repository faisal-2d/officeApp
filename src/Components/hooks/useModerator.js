import axios from "axios";
import { useEffect, useState } from "react";

const useModerator = (user) => {
    const [moderator, setModerator] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(()=> {
        const userEmail = user?.email;        
        if(userEmail){                       
            axios.get(`${process.env.REACT_APP_BACKEND_API}/users/ismoderator/${userEmail}`)
            .then(data => {
                setModerator(data.data.isModerator);
                setIsLoading(false);                
            })
        }

    } ,[user])
    return [moderator, isLoading];
}
export default  useModerator;
