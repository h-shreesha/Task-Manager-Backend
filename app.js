const express = require('express');
const app = express();

const port = 3000;

//routes
app.get('/', (req, res) => {
    res.send('Task Manager App')
})

app.listen(port, console.log(`App is listening on port ${port}`)
)
