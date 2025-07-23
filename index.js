const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/health', (req, res) => {
    res.json({
        status: 'OK',
        version: '1.0.0',
    })
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})
