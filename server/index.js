const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());


app.get("/", function(req, res){
    res.send("Pagina inicial"); 
});


//routes for authentication
app.use('/auth', require('./routes/auth'));

app.listen(PORT, () => console.log(`Server is running in port ${PORT} `));