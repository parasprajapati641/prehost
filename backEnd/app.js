const express = require("express");
const app = express();
const dotenv = require("dotenv");
const dbConnect = require('./config/dbConnect.js');
const cors = require("cors");

const authRoute = require("./routes/authRoute.js");
const inquiryRoute = require("./routes/contact.js");

app.use(express.json());
dotenv.config();
dbConnect();
app.use(cors());


app.get('/', (req, res) =>{
     res.send('Hello Prehost');
})

app.use('/user', authRoute);
app.use('/inquiry', inquiryRoute);

app.listen(process.env.PORT, () =>{
     console.log(`Server is running on port ${process.env.PORT}`);
})