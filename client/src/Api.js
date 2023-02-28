import axios from "axios"

// const baseUrl = "http://192.168.1.18:2222"
const baseUrl = "http://192.168.5.120:2222"

const authUrl = baseUrl + "/auth"
const matchUrl = baseUrl + "/match"
const predictionUrl = baseUrl + "/prediction"

async function sendLoginDetails(username, password) {
    const res = await axios({
        url: authUrl+"/signin",
        method: "POST",
        data: {"email": username, "password": password},
      });

    localStorage.setItem("token", res.data['data']['token']);
}

async function sendRegisterDetails(username, password, name) {
    const res = await axios({
        url: authUrl+"/signup",
        method: "POST",
        data: {"email": username, "password": password, "name": name},
      });

    localStorage.setItem("token", res.data['data']['token']);
}

async function voteMatch(teamId, matchId){
  
  let res;
  try {
    res = await axios({
      url: predictionUrl + "/createPrediction",
      method: "POST",
      headers : {
        Authorization : localStorage.getItem("token")
      },
      
      data: {"team": teamId, "match" : matchId},
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
      method: "POST",
      data: {date: date.toISOString()},
  })

  } catch (error) {
    console.log(error)    
  }
   
  
  return res;

}

export { sendLoginDetails, sendRegisterDetails, getMatch, voteMatch }