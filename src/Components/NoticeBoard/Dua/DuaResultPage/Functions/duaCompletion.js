import axios from "axios";

const duaCompletion = (batch, sn) => {

    axios.put(`https://alharamanin-backend-web.onrender.com/dua/completion/update/${batch}/${sn}`, )
    .then(data => {
    })
    return;
};

export default duaCompletion;