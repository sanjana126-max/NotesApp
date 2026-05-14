const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')

const noteRoutes = require('./routes/noteRoutes')

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api/notes', noteRoutes)

app.use('/uploads', express.static('uploads'))

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Server Running')
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})