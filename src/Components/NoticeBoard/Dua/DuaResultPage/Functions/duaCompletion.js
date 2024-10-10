import axios from "axios";

const duaCompletion = (batch, sn) => {

    axios.put(`${process.env.REACT_APP_BACKEND_API}/dua/completion/update/${batch}/${sn}`, )
    .then(data => {
    })
    return;
};

export default duaCompletion;