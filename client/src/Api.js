import axios from "axios"

const baseUrl = "http://192.168.1.18:2222"
const authUrl = baseUrl+"/auth"

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

async function getMatch(date = new Date()) {
    await axios({
        url: baseUrl+"/match/allmatches",
        method: "POST",
        data: {"date": date.toISOString},
      }).then( response => {
        return response.data
      });
}

export { sendLoginDetails, sendRegisterDetails, getMatch }