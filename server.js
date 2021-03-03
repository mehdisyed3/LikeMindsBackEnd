import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Cards from './dbCards.js'



//"type" : "module" helps use es6 in the backend


//App config

const app = express()
const port = process.env.PORT || 8001

const connection_Url = 'mongodb+srv://oni:Onioni22@cluster0.9tzao.mongodb.net/likemindsdb?retryWrites=true&w=majority'



//Middleware

app.use(express.json())
app.use(cors())



//DB config

mongoose.connect(connection_Url, {
  //we add this object parameter to help with smooth connection with mongoose as mongoose is ever evolving  and developing
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,

})
;

// Api Endpoints

app.get('/', (req, res)=>{
  res.send('Hello Doston')
})


app.post('/profiles', (req,res)=>{
  const profile = req.body

  Cards.create(profile, (err,data) =>{
      if(err){
        res.status(500).send(err)
      }else{
        res.status(201).send(data)
      }
  } )

})

app.get('/profiles', (req, res)=>{
 
  Cards.find((err,data)=>{
    if(err){
      res.status(500).send(err)
    } else{
      res.status(200).send(data)
    }
  })
})




//Listeners

app.listen(port, ()=> console.log(`listening on PORT: ${port}`))

