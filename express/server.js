const express = require('express')
const mongoose = require('mongoose')
const app = express()

mongoose.connect(process.env.mongodb, {
    useNewUriParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("MongoDB Connected! very OK");
}).catch( (err) => console.log(err));


const port = process.env.port;
app.listen(port, () => {
    console.log( `server is running on http://localhost:${port}` )
})