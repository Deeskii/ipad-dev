// ESM
import express from 'express'
const app = express()
const port = 3001

app.all('/', (req, res) => {
    res.send(`wassup`)
})
  
app.all('/secret', (req, res, next) => {
    console.log('Accessing the secret section ...')
    next() // pass control to the next handler
    res.send(req.body)
  })

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})