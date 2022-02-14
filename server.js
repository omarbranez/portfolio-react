const express = require('express');
const app = express();
const PORT = process.env.PORT || '8080'
//Below code is to point to your react build folder which you will keep inside server folder inside client folder

let root = path.join(__dirname, 'client/build/')
app.use(express.static(root))

//this is the routing which will redirect your server url to react build file
app.get("*",(req,res)=>{
   res.sendFile(path.join(__dirname, '/client/build/index.html'));
})
app.set("port", PORT)
app.listen(process.env.PORT || 8080);