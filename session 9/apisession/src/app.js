const express= require('express')
require('./db/moongse')
const userRoutes = require('./routes/user')
const app = express()
const port = process.env.PORT || 3000
app.use(express.json())

app.use(userRoutes)

app.listen(port)