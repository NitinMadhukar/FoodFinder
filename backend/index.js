import app from './server.js'
import mongodb from 'mongodb'
import dotenv from 'dotenv'
dotenv.config()
const MongoClient = mongodb.MongoClient

const port = process.env.PORT || 8000

MongoClient.connect(
    process.env.RESTREVIEWS_DB_URI,
    {
        poolSize:50, // 50 people can connect at a time 
        wtimeout:2500, // after 2500 ms request is time out
        useNewUrlParser:true
    }
)
.catch(err=>{
    console.error(err.stack)
    process.exit(1)
})
.then(async client=>{
    app.listen(port,()=>{
        console.log(`listen to port ${port}`)
    })
})


