require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/register", (req, res) => {
    res.send("Register")
})

app.get("/app", (req, res) => {
    res.send("<h1>This is the best Web App in the whole multi-universe</h1>")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})