import express from 'express'
import cors from 'cors'


const app = express();

app.use(cors())
app.get("/", (req, res) => {
    res.send("Server Running...");
})

const data = [
    {
        id: "1",
        username: "John",
        age: 30
    },
    {
        id: "2",
        username: "William",
        age: 49
    },
    {
        id: "3",
        username: "Raphael",
        age: 19
    },
    {
        id: "4",
        username: "Karl",
        age: 25
    },
    {
        id: "5",
        username: "Kale",
        age: 26
    },
    {
        id: "6",
        username: "Charlie",
        age: 33
    },
    {
        id: "7",
        username: "Borris",
        age: 22
    },
    {
        id: "8",
        username: "Peter",
        age: 45
    },
    {
        id: "9",
        username: "Larry",
        age: 27
    },
    {
        id: "10",
        username: "David",
        age: 41
    }
]

app.get("/data", (req, res) => {
    res.json(data)
})

const port = process.env.PORT || 2500;

app.listen(port, () => {
    console.log(`Serving at: http://localhost:${port}/`);
})