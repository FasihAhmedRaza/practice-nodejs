const express =require('express');
const { render } = require('express/lib/response');
const path = require('path');
const { getMaxListeners } = require('process');

const app = express();
const publicPath =path.join(__dirname ,'public');

app.set('view engine' , 'ejs');
app.set('views', path.join(__dirname, "views"));

app.get('',(_,res)=>{
    res.sendFile(`${publicPath}/about.html`);
})

app.get('/profile',(_,res)=>{
    const user ={
        name : 'fasih ahmed',email :'fas@getMaxListeners.com'
    }
    res.render('profile',{user});
});

app.get('/login' ,(_,res)=>{
    res.render('login');
})

app.get('/header' ,(_,res)=>{
    res.render('header');
})

app.get('/about',(_,res)=>{
    res.sendFile(`${publicPath}/about.html`)
})
app.get('/help',(_,res)=>{
    res.sendFile(`${publicPath}/help.html`)
})
app.get('*',(_,res)=>{
    res.sendFile(`${publicPath}/nopage.html`)
})

// html ki files ko hmm static files bolte haa
// app.use(express.static(publicPath));  // static pages ko load karta haa


app.listen(3500);

// 3:23
// ------------------------------------------------------------------------------------------


// const express = require('express');
// // import express from "express";/
//  const res = require('express/lib/response');

// const app = express();


// app.get('/' , (req,res) =>{
//     res.send(`<h1>Welcome to home Page</h1>
//     <a href="/about"> Go to about us Page</a>
//     `);
// });

// app.get('/about' , (req,res) =>{
//     res.send(`
//     <input type="text" placeholder="User name" >
//     <button>Click Me</button>
//     <a href="/"> Go to home us Page</a>
//     `);
// })
// app.get('/help' , (req,res)=>{
//     res.send(
//    [ {
//          name: 'fasih' , id :'12424'
//     },{
//         name: "ali" ,id : '23423'
//     }]
//     );
// })

// app.listen(3000);





//----------------------------------------------------------------
// let a = 20 ;
// let b = 0 ;

// let waitingData = new Promise((resolve,reject) =>{
//     setTimeout(()=>{
//         resolve(30)
//     },200)
// })

// waitingData.then((data) =>{
//     b = data ;
//     console.log(a+b);
// })




// -------------------------------------------------------------------------
// const fs = require('fs');
// const path = require('path');
// const directoryPath = path.join(__dirname ,'crud');
// const filePath = `${directoryPath}/apple.txt`;


// fs.writeFileSync(filePath ,"this is a new fiel");
// fs.readFile(filePath ,'utf-8',(err,item) =>{
//     console.log(item)
// })

// fs.appendFile(filePath,'changes done ' ,(err) =>{ // for updating 
//     if(!err) console.log("file is updated")
// })

// fs.rename(filePath, `${directoryPath}/ae.txt` ,(err) =>{
//     if (!err) console.log("filename is updated");
// })


// fs.unlinkSync(`${directoryPath}/ae.txt`); // for delete








// ----------------------------------------------------------
// const fs = require('fs');
// const path = require('path');
// const directoryPath = path.join(__dirname, 'files');

// // for(i =0 ; i < 5 ; i++){
// //     fs.writeFileSync(directoryPath + "/hello"+i+".txt","a hello txt file this is");
// // }

// fs.readdir(directoryPath,(err,files) =>{
//     files.forEach((item) => {
//         console.log("file name is " , item);
//     })
// })












// -----------------------------------------------------------------------------
// const fs =require('fs');

// const input = process.argv; // argument vector

// if(input[2] =='add'){
//     fs.writeFileSync(input[3],input[4]); //writefilesync aik new file create karee gaa

// }
// else if(input[2]=='remove'){
//  fs.unlinkSync(input[3])
// }
// else{
//     console.log('invalid input')
// }













// const http = require('http');
// const data = require('./data');


// http.createServer((req,res) =>{
//     res.writeHead(200 , {'content-Type' : 'application\json'});// 200 get api ka standard hota ha
// // res.write(JSON.stringify({name : 'Fasih Ahmed' , email : 'thisfasih@gmail.com'}));
// res.write(JSON.stringify(data));
// res.end();


// }).listen(4500);




// -----------------------------------------------------------------












// ----------------------- 1:34 completed--------------------
// const http = require('http');

// // http.createServer((req,res) => {
// //     res.write('Hello this is anil sidhu');
// //     res.end();
// // }).listen(4500);

// const dataControl =(req,res) =>{
//     res.write('Hello this is fasih ahmed');
//     res.end();
// }

// http.createServer(dataControl).listen(4500);

// console.warn("fsgsdgsdafasfzgsadasfas nodemon");