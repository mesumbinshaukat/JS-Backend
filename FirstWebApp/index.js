require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT

const data = {
  "login": "mesumbinshaukat",
  "id": 35807672,
  "node_id": "MDQ6VXNlcjM1ODA3Njcy",
  "avatar_url": "https://avatars.githubusercontent.com/u/35807672?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/mesumbinshaukat",
  "html_url": "https://github.com/mesumbinshaukat",
  "followers_url": "https://api.github.com/users/mesumbinshaukat/followers",
  "following_url": "https://api.github.com/users/mesumbinshaukat/following{/other_user}",
  "gists_url": "https://api.github.com/users/mesumbinshaukat/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/mesumbinshaukat/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/mesumbinshaukat/subscriptions",
  "organizations_url": "https://api.github.com/users/mesumbinshaukat/orgs",
  "repos_url": "https://api.github.com/users/mesumbinshaukat/repos",
  "events_url": "https://api.github.com/users/mesumbinshaukat/events{/privacy}",
  "received_events_url": "https://api.github.com/users/mesumbinshaukat/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Mesum Bin Shaukat",
  "company": "World Of Tech",
  "blog": "https://mesumbinshaukat.github.io/PORTFOLIO/",
  "location": "4-B-5/23 Ghousia Manzil, Nazimabad No#4, Karachi, Pakistan",
  "email": null,
  "hireable": true,
  "bio": "I'm a full stack developer and my skills are very good at Python and I'm also a game developer (Unity 3D). I'm trying to empower my skills on daily basis.",
  "twitter_username": "MesumBinShaukat",
  "public_repos": 10,
  "public_gists": 0,
  "followers": 2,
  "following": 4,
  "created_at": "2018-01-25T14:43:06Z",
  "updated_at": "2023-11-30T13:13:29Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/register", (req, res) => {
    res.send("Register")
})

app.get("/app", (req, res) => {
    res.send("<h1>This is the best Web App in the whole multi-universe</h1>")
})

app.get("/api", (req, res) => {
  res.json(data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})