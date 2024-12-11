import { MongoClient } from "mongodb";

export async function connectDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://waleagbeniga06:Abope12191996.@cluster0.sc2bg.mongodb.net/event"
  );
  return client;
}
export async function insertDocument(client, collection, document) {
  const db = client.db();

  const result = await db.collection(collection).insertOne({ document });

  return result;
}

export async function getAllDocuments(client, collection, sort) {
  const db = client.db();

  const document = await db.collection(collection).find().sort(sort).toArray();
  return document;
}
