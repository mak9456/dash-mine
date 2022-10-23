const express = require('express');
  
const app = express();
const apiRoute = require('./routes/index');
const PORT = 3000;

app.use('/api/v1', apiRoute) 
app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT);
    else 
        console.log("Error occurred, server can't start", error);
    }
);