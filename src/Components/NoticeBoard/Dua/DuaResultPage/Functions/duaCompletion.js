import axios from "axios";

const duaCompletion = (batch, sn) => {
    console.log("inside completion ",batch, sn);

    axios.put(`https://alharamanin-backend-web.onrender.com/dua/completion/update/${batch}/${sn}`, )
    .then(data => {
        console.log(data.data);
    })
    return;
};

export default duaCompletion;