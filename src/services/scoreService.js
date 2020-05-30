import axios from "axios";

const BASE_URL = "https://annievsgary.herokuapp.com";

export default {
  fetchAllScores: async () => {
    let res = await axios.get(`${BASE_URL}/scores`);
    return res.data || [];
  },
};
