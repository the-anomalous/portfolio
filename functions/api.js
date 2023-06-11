const express = require('express')
const path = require('path')
const sendMail = require('./email.controller') 
const serverless = require('serverless-http')

const app = express()
const router = express.Router()

app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use('/.netlify/functions/api', router)

router.post('/submit', async (req, res) => {
  const response = await sendMail(req.body)
  
  res.json(response)
})

module.exports.handler = serverless(app)