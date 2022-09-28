import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes";
import router from "./routes/user-routes";
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/user", router);
app.use("/api/blog", blogRouter);

app.use("/api", (req, res, next)=>{
    res.send("Hello World!");
});
mongoose.connect(`mongodb+srv://admin:${password}@cluster0.0rdampn.mongodb.net/Blog?retryWrites=true&w=majority`).then(()=>console.log("Database connected")).catch((err) => {
    console.log(err);
})

app.listen(5000, ()=> {
    console.log("Server is running at port 5000");
});
