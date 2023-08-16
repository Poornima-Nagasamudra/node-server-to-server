const express = require("express")
const app = express()

const configureDB = require("./config/database")
const router = require("./config/routes")
const port = 3080;

configureDB();
app.use(express.json());
app.use("/", router);

app.listen(port, () => {
  console.log("port is running on the port  on", port);
});
