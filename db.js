const MONGODB_URI = 'mongodb+srv://carolmarol:carolmarol5@myproject.y94zuww.mongodb.net/?retryWrites=true&w=majority'
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const mongoURI = MONGODB_URI;
const uri = MONGODB_URI;
const client = new MongoClient(uri);

const connectToMongo = (async () => {
  try {
    await client.connect();
    const dbRole = await client.db().command({ hello: 1 });
    console.log(
      `Role of database - Host: ${dbRole.me}  Is primary: ${dbRole.isWritablePrimary}`
    );
    await client.close();
  } catch (e) {
    console.log('Error: ', e.message);
  }
})();

//    await mongoose.connect(mongoURI)
  //  .then(() => console.log('Connected to Mongo!'))
   // .catch((err) => console.log(err))};

//const connectToMongo = async () => {
//try {
    //mongoose.set('strictQuery', false)
    //mongoose.connect(mongoURI) 
    //console.log('Mongo connected')
//}
//catch(error) {
  //  console.log(error)
    //process.exit()
//}
//}
module.exports = connectToMongo;
