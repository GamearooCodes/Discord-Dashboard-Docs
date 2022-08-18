const express = require('express')
const app = express()

app.use(express.static('assets'))

app.listen(3051) // CNAME dbd-docs ONLY-PROD port