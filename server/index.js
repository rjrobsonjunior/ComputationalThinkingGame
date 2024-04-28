const express = require('express')

const app = express();
const PORT = process.env.PORT  || 5000;

app.use(express.json());

//routes for authentication
app.use('/auth', require('./routes/auth'));

app.listen(PORT, () => console.log(`Server is running in port ${PORT} `));