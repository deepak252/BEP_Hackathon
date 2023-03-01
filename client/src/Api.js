import axios from "axios";

// const baseUrl = "http://192.168.1.18:2222";
const baseUrl = "http://192.168.5.120:2222";
// const baseUrl = "http://192.168.7.174:2222";

const authUrl = baseUrl + "/auth";
const matchUrl = baseUrl + "/match";
const predictionUrl = baseUrl + "/prediction";

async function sendLoginDetails(username, password) {
  const res = await axios({
    url: authUrl + "/signin",
    // url: "/auth/signin",
    method: "POST",
    data: { email: username, password: password },
  });

  return res.data["data"]["token"];
}

async function sendRegisterDetails(username, password, name) {
  const res = await axios({
    url: authUrl + "/signup",
    // url: "/auth/signup",
    method: "POST",
    data: { email: username, password: password, name: name },
  });

  return res.data["data"]["token"];
}

async function voteMatch(teamId, matchId) {
  let res;
  try {
    res = await axios({
      url: predictionUrl + "/createPrediction",
      // url: "/prediction/createPrediction",
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("token"),
      },

      data: { team: teamId, match: matchId },
    });
  } catch (error) {
    console.log(error);
  }

  return res;
}

async function getMatch(date) {
  let res;
  try {
    res = await axios({
      url: matchUrl + "/matchByDate",
      // url: "/match/matchByDate",
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
      data: { date: date.toISOString() },
    });
  } catch (error) {
    console.log(error);
  }

  return res;
}

async function getPastPredictions() {
  let res;
  let pastPredictions = [];
  try {
    res = await axios({
      url: predictionUrl + "/pastPredictions",
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });

    if (res.status !== 200) {
      alert("Unable to fetch past predictions!");
      return;
    }

    pastPredictions = res.data.map((obj) => {});
  } catch (error) {
    alert("Unable to fetch past predictions!");
    return;
  }

  return res;
}

export {
  sendLoginDetails,
  sendRegisterDetails,
  getMatch,
  voteMatch,
  getPastPredictions,
};
