const express = require('express')
const path = require('path')
const sendMail = require('./email.controller')

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.post('/submit', (req, res) => {
  res.send('sending')
  sendMail(req.body)
})

app.listen(PORT, () => console.log(`server running on port ${PORT}`))