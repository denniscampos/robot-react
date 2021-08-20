import axios from "axios";

const baseUrl = "https://mondo-robot-art-api.herokuapp.com/votes";

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  deleteVote: async function (voteId) {
    const userToken = window.localStorage.getItem("user-token");
    const deleteVoteURL = `${baseUrl}/${voteId}`;

    const response = await axios.delete(deleteVoteURL, {
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + userToken,
        "Content-Type": "application/json",
      },
    });
    return response;
  },
  castVote: async function (robotId) {
    const userToken = window.localStorage.getItem("user-token");
    const response = await axios.post(
      baseUrl,
      { robot: robotId },
      {
        headers: {
          accept: "application/json",
          Authorization: "Bearer " + userToken,
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  },
};
