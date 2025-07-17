const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/version', (req, res) => {
    res.json({
        version: '1.0.0',
        description: 'AWS CodeDeploy Example Application'
    })
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})
