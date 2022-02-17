const express =require('express');
// const res = require('express/lib/response');
const dbConnect = require('mongodb');

const app = express();


app.get('' ,(res,req)=>{
    let data = await  dbConnect();
    data = await data.find().toArray();
    console.log(data);
    // res.send({name:'fasih'})/
});


app.delete(':/id' , (req ,res)=>{
    console.log(req.params.id);
    const data = await dbConnect();
    const result = data.deleteOne(id.req.params.id);
    res.send("done");
})

app.listen(5000);