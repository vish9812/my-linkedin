// This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb
import { MongoClient } from "mongodb";
import AppData from "../app-data";

const uri = process.env.MONGODB_URI!;

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (!process.env.MONGODB_URI) {
  throw new Error("Please add your Mongo URI to .env.local");
}

if (process.env.NODE_ENV === "development") {
  // In development mode, use a AppData variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  console.log("Checking Mongo Connection>>>>>>>");
  if (!AppData._mongoClientPromise) {
    console.log("New Mongo Connection>>>>>>>");
    client = new MongoClient(uri);
    AppData._mongoClientPromise = client.connect();
  }
  clientPromise = AppData._mongoClientPromise;
} else {
  // In production mode, it's best to not use a AppData variable.
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise;
