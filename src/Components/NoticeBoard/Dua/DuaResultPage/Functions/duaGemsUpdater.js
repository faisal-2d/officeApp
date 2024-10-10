import axios from "axios";


const duaGemsUpdater = (gems, batch, sn) => {
    const data = {
        "gems" : gems + 1,
    }     
    axios.put(`${process.env.REACT_APP_BACKEND_API}/dua/gems/update/${batch}/${sn}`, data)
    .then(data => {
        console.log(data);
    })
    return;
};

export default duaGemsUpdater;