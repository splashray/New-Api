const express = require('express')
const mongoose =  require('mongoose')
const bodyParser = require('body-parser')
const swaggerUi = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')


const options = {
  definition: {
    openapi:  "3.0.0",
    info: {
      title: "Denukan API",
      version: "1.0.0",
      description: "DENUKAN SOFTWARE API"
    },
    servers: [
      {
        url: "http://localhost:3002"
      }
    ],
  },
  apis: ["./routes/*.js"]
}

const specs = swaggerJsDoc(options)

const app = express()

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))

app.use(express.json())



app.use(bodyParser.urlencoded({extended: false}))

const newsPageRoutes = require('./routes/newsPage')

app.use('/news', newsPageRoutes)

const port = 3002

app.listen(port, console.log(`server started on port ${port}`))

mongoose.connect('mongodb+srv://samdenukan:Humanhurricane01@cluster0.2hzoipq.mongodb.net/?retryWrites=true&w=majority')
.then(result => {
  console.log('Database connected');
})
.catch(err => {
  console.log(err);
})