const express = require('express');
const app = express();
const PORT = 4000;

app.use(express.json());

app.post('/', function(req, res)
{
    console.log(req.body.name)
    res.send();
})

app.listen(PORT, function(err){
    if(err)
        console.log(err);
    console.log("Server listining on PORT", PORT)
})