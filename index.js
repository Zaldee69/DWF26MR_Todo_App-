const express = require("express");
const cors = require("cors");
const router = require("./src/routes");
const { env } = require("process");

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 4000;

app.use("/api/v1", router);

app.listen(port, () => {
  console.log(`Server started on port`, port);
});
