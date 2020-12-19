const express= require('express')
require('./db/moongse')
const User = require('./models/user')
const app = express()
const port = process.env.PORT || 3000
app.use(express.json())
app.post('/add', (req, res) => {
    const data = new User(req.body)

    data.save()
    .then( () => {
        res.send('added')
    })
    .catch( (e) =>
        res.send(e)
    )
})
app.listen(port)