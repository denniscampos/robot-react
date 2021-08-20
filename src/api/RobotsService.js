import axios from "axios";

const baseUrl = "https://mondo-robot-art-api.herokuapp.com/robots";

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  robots: async function (voteId) {
    const userToken = window.localStorage.getItem("user-token");
    const robotUrl = `${baseUrl}/}`;

    const response = await axios.get(robotUrl, {
      headers: {
        accept: "application/json",
        "x-robot-art-api-key": process.env.REACT_APP_API_KEY,
        Authorization: "Bearer " + userToken,
        "Content-Type": "application/json",
      },
    });
    return response;
  },
};
