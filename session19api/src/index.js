const express= require('express')
const cors = require('cors')
require('./db/mongoose')
const userRoutes = require('./routes/user')
const taskRoutes = require('./routes/tasks')

const app = express()
const PORT = process.env.PORT || 3000

const multer = require('multer')

//  upload = multer({
//         dest:'images1',
//         limits: { fileSize: 122222222},
//         fileFilter(req, file, cb){
//             console.log(file.originalname.match(/\.(jpg|png)$/))
//             if(!file.originalname.match(/\.(jpg|png)$/)){
//                 return cb(new Error('upload jpg or png'))
//             }
//             cb(undefined, true)
//         },
//         filename: function (req, file, cb) {
//             const uniqueSuffix = Date.now() + file.originalname.match(/\.(jpg|png)$/)[0]
//             cb(null, file.fieldname + '-' + uniqueSuffix)
//           }
      
//     })
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'images2')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + file.originalname.match(/\.(jpg|png)$/)[0]
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
  var upload = multer({ storage: storage })    
app.post('/uploadImg', upload.single('upload'), (req,res)=>{
    res.send('uploaded')
})

app.use(cors())
app.use(express.json())
app.use(userRoutes)
app.use(taskRoutes)
app.listen(PORT, ()=>{console.log('server up on 3000');})