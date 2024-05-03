<<<<<<< HEAD
const express = require('express')
const dotenv = require('dotenv');
dotenv.config();
=======
const express = require('express');
>>>>>>> 839bb7c6d452e23dc589df01f49c740a1726820d

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());


app.get("/", function(req, res){
    res.send("Pagina inicial"); 
});


//routes for authentication
app.use('/auth', require('./routes/auth'));

app.listen(PORT, () => console.log(`Server is running in port ${PORT} `));