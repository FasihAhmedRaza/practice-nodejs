const mongoose = require('mongoose');

const main = aysnc ()=> {
    await mongoose.connect ("urlogmongodb");

    const ProductSchema = new mongoose.Schema({
        name:string
    });


    const ProductModel = mongoose.model('products' ,ProductSchema);
    let data = new ProductModel({name: "m8"});
    let result = await data.save();
    console.log(result);

}

main()


// ------------------------------------------------------------
// const res = require('express/lib/response');
// const {MongoClient} = require('mongodb');

// const url = 'mongodb://localhost:27017';
// const database = '';
// const client = new MongoClient(url);

// // time ko handle karne ki liyee promisee
// async function dbConnect(){ //client promise return karte ha 
//     let result = await client.connect();
//     let db = result.db(database);
//     let collection = db.collection('');
// let response = await collection.find({}).toArray();

//   console.log(response);
// l
// }

// dbConnect();







// ----------------------------------------------------------------
// const  express = require('express');
// const reqFilter = require('./middleware');
// const app = express();
// const route = express.Router();

 


// // app.use(reqFilter);

// route.use(reqFilter);



// app.get('/home' ,(res,resp)=>{
//     resp.send('welcome to home page');
// });


// route.get('/users' ,(res,resp)=>{
//     resp.send('welcome to user page');
// });


// // app.use('/' ,route);
// app.listen(5000);