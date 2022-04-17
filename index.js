const express = require('express')  // When you require something then write thins on top 
const path =require('path');

const app =express();

const publicPath=path.join(__dirname,'public');

app.use(express.static(publicPath));
app.listen(5000);