import express from "express";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js";
import cors from "cors";
const app = express();
app.use(cors());
import dotenv from "dotenv";
dotenv.config();
const URI = process.env.MongoDBURI;
const PORT = process.env.PORT || 4000;
try {
  mongoose.connect(URI, {
    useNewUrlparser: true,
    useUnifiedTopology: true,
  });
  console.log("conncted mongodb");
} catch (error) {
  console.log("error", error);
}

//defining routes
app.use("/book", bookRoute);
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
