import 'dotenv/config'
import { MongoClient } from "mongodb";

const url = process.env.MONGO_URL
const client = new MongoClient(url)

let db; 
async function connectDataBase() {
    try {
        await client.connect()
        db = client.db('cpProcess');
        return db;
    }  catch {
        console.log("Erro ao se conectar ao Mongo")
    }
    
}

export default connectDataBase;