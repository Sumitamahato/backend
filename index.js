const express  =require("express"); 
const {connection} = require("./configs/connection");
const{userRoute} =require("./route/user.route");
const{moderatorRoute} =require("./route/moderator.route");
require ("dotenv").config();

const app = express();
app.use(express.json());




app.get("/", (req,res) => {
    res.send("welcome to the homepage")
})


app.use("/user",userRoute)
app.use("/moderator",moderatorRoute)




app.listen(process.env.port,async () =>{
   try {
    await connection;
    console.log("connected to the db")
   } catch (error) {
      console.log("could not connected to the db")
   }
   console.log(`server is running in the port:${process.env.port}`);
})
