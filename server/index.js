
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { default as mongodb } from 'mongodb';
import attractionRoutes from './routes/attractions.js';
import axios from 'axios';


const app = express();
dotenv.config();

app.use(cors());
app.use(attractionRoutes);

app.get('/', (req,res) =>
  res.send('Hello to Attractions arround me API')
); 

let MongoClient = mongodb.MongoClient;

const PORT = process.env.PORT || 5000;

const dbName = 'AttractionsDB';
const client = new MongoClient(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const getDocumentsCount = async(db) => {
  try {
    const count = await db.collection("attractions").countDocuments({});
    return count;
  }

  catch (err){
    console.log(err)
  }
}


const insertData = async() => {
  try {
       await client.connect();
       const res = await axios.get('https://data.gov.il/api/3/action/datastore_search?resource_id=29f4ec99-ec7f-43c1-947e-60a960980607&limit=40');

       const relevantKeys = [
        'Name',
        'Id',
        'Address',
        'Attraction_Type',
        'Opening_Hours',
        "URL",
        'X',
        'Y'
      ];
      

       const db = client.db(dbName);
       const col = db.collection("attractions");
       const countDocuments = await getDocumentsCount(db);
       

       if (countDocuments !== 0) return;

       if (res) {
        const attractionsDataFiltered = res.data.result.records.map((singleAttraction) =>
          Object.keys(singleAttraction)
            .filter((key) => relevantKeys.includes(key))
            .reduce((obj, key) => {
              obj[key] = singleAttraction[key];
              return obj;
            }, {}),
        );

        await col.insertMany(attractionsDataFiltered);
       }  
      } catch (err) {
       console.log(err.stack, 'ERROR');
   }

   finally {
      await client.close();
  }
}


insertData().catch(console.dir);


mongoose.connect(process.env.CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(error));


 
