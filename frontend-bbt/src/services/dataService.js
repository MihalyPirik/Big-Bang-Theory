import axios from "axios";

export const getSeasons = () => {
    return axios.get('http://127.0.0.1:8000/api/evadok')
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        })
}

export const getEpisodes = (seasonId) => {
    return axios.get('http://127.0.0.1:8000/api/epizodok/'+seasonId)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        })
}
