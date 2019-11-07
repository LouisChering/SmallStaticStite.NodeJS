const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 8090
const wwwRoot = process.env.WWW || 'www'
var cacheTime = 86400;
//app.get('/', (req, res) => res.send('Hello World!'))
app.use(express.static(path.join(__dirname, wwwRoot), { maxAge: cacheTime }))

app.listen(port, () => console.log(`App listening on port ${port} serving ${wwwRoot}`))