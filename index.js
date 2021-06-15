const express = require("express")
const router = require("./src/controllers")
const path = require("path")

require("dotenv").config()

const app = express()
const port = process.env.PORT

app.use(express.static(path.join(__dirname, "./src/public")))
app.use(router)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})
