// const request = require('request')

// const url ="http://newsapi.org/v2/everything?q=bitcoin&from=2020-11-16&sortBy=publishedAt&apiKey=702e9ad75b684b2ba13de7a0b5cf6ba3"

// request ( {url}, (err, res)=>{
//     data = JSON.parse(res.body)
//     console.log(data.status)
// } )

const https = require('https')
const url ="https://newsapi.org/v2/everything?q=bitcoin&from=2020-11-16&sortBy=publishedAt&apiKey=702e9ad75b684b2ba13de7a0b5cf6ba3"
const req = https.request(url, (res)=>{
    let data = ``
    res.on('data',(chunk)=>{
        data += chunk.toString()
    })
    res.on('end',()=>{
        const body = JSON.parse(data)
        console.log('data', body)
    })
})
req.on('error', (err)=>{
    console.log(err)
})
req.end()