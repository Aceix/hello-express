const { getMovies } = require("../../services/movie.service")

const router = require("express").Router()

// resolve => localhost:8081/movie
router.get("/", (req, res) => {
  const movies = getMovies()

  res.json(movies)
})

module.exports = router
