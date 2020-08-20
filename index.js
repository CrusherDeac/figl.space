const express = require('express')
const app = express()

app.use(express.static('./client'))
app.listen(8080, console.log('server started on http://localhost:8080'))
