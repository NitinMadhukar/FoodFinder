import express from "express"
import cors from "cors"
import restaurants from "./api/restaurants.route.js"

const app = express()

// middlewares
app.use(cors())
app.use(express.json())

//general version to write api v1(version 1) 
app.use("/api/v1/restaurants", restaurants)
// if not present in route file then error will print
app.use("*", (req, res) => res.status(404).json({ error: "not found"}))

export default app
 