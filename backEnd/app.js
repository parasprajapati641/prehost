const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const dbConnect = require('./config/dbConnect.js');
const cors = require("cors");

const authRoute = require("./routes/authRoute.js");
const contactRoute = require("./routes/contactRoute.js");
const subscriber = require("./routes/subscriberRoute.js")


app.use(cors());
app.use(express.json());

dbConnect();

app.get('/', (req, res) =>{
     res.send('Hello Prehost');
})

app.use('/user', authRoute);
app.use('/contact', contactRoute);
app.use('/subscriber', subscriber)

app.listen(process.env.PORT, () =>{
     console.log(`Server is running on port ${process.env.PORT}`);
})