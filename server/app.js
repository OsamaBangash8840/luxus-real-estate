const express = require('express');
const connectDB = require('./config/db')
const userRoutes = require('./routes/userRoutes')
const propertyRoutes = require('./routes/propertyRoutes')
const categoryRoutes = require('./routes/categoryRoutes')
const tourRoutes = require('./routes/schedulaTourRoutes')
const reviewRoute = require('./routes/reviewsRoutes')
require('dotenv').config();
const PORT = 8000 || process.env.PORT
const cors = require('cors')

const app = express();
app.use(express.json());

const corsOption = {
    exposedHeaders :  ['Content-Length','Authorization','token'],
    origin:'http://localhost:3000'
  }
  
app.use(cors(corsOption))
connectDB();


app.use('/api',userRoutes)
app.use('/api',propertyRoutes)
app.use('/api',categoryRoutes)
app.use('/api',tourRoutes)
app.use('/api',reviewRoute)

app.listen(PORT,()=>{
    console.log("API IS RUNNING ON 8000")
})

