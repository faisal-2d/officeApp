import axios from "axios";


const duaGemsUpdater = (gems, batch, sn) => {
    const data = {
        "gems" : gems + 1,
    }     
    axios.put(`https://alharamanin-backend-web.onrender.com/dua/gems/update/${batch}/${sn}`, data)
    .then(data => {
        console.log(data);
    })
    return;
};

export default duaGemsUpdater;