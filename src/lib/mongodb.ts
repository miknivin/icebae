import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

function getClientPromise(): Promise<MongoClient> {
  if (!uri) {
    throw new Error('Missing MONGODB_URI environment variable');
  }

  if (process.env.NODE_ENV === 'development') {
    // Reuse the client across hot reloads in development.
    if (!global._mongoClientPromise) {
      client = new MongoClient(uri);
      global._mongoClientPromise = client.connect();
    }
    return global._mongoClientPromise;
  }

  client = new MongoClient(uri);
  clientPromise = client.connect();
  return clientPromise;
}

export default getClientPromise;
