const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const mongoose = require("mongoose");

const app = express();
const MONGO_URI="mongodb+srv://surbhikumari6061:YC8WrfxL2PnhwjZk@cluster0.fga4ome.mongodb.net/netflix "
app.use(cors());
app.use(express.json());


mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connection Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/api/user", userRoutes);

app.listen(5000, () => {
  console.log("server started on port 5000");
});