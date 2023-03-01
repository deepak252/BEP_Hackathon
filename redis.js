const {createClient} =require("redis");

async function nodeRedisDemo() {
  try {
    const client = createClient();
    await client.connect();
    console.log("Connected to Redis DB");
    await client.quit();
  } catch (e) {
    console.error("Error Connecting Redis",e);
  }
}

nodeRedisDemo();