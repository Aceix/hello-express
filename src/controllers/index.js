const path = require("path");
const router = require("express").Router()
const movieRouter = require("./api/movie.js")

// routes

router.use("/movie", movieRouter)

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"))
})

module.exports = router
