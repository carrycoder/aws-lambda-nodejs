const express = require("express"); 

const app = express(); 

const reviews = require("./routes/reviews");

app.get("/",(req,res)=>{
    res.status(200).send("welcome to the app"); 
})

app.use("/reviews",reviews);

const PORT = 3000; 
/*
app.listen(PORT,_ => {
    console.log(`App is listening at PORT ${PORT}`);
})
*/

module.exports = app; 