/*****mongoose */
//對象文檔模型庫
//方便操作mongodb數據庫
//安裝mongoose
//npm init
//npm i

const mongoose=require("mongoose")
try {
  // Connect to the MongoDB cluster
  mongoose.connect(
    "mongodb+srv://ovenchang:aSFPmHAwMHpJsvK4@cluster0.0qefrll.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
} catch (e) {
  console.log("could not connect");
}

const dbConnection = mongoose.connection;
dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
dbConnection.once("open", () => console.log("Connected to DB!"));




/**
 * const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://ovenchang:aSFPmHAwMHpJsvK4@cluster0.0qefrll.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
 */