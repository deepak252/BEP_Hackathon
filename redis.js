const {createClient} = require("redis");

const client = createClient();

async function connectRedis() {
  try {
    await client.connect();
    console.log("Connected to Redis DB");
  } catch (e) {
    console.error("Error Connecting Redis", e);
  }
}

module.exports = {client,connectRedis};