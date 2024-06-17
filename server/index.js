const express = require('express')
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();
const app = express();

app.use(cors()); // Habilita o CORS para todas as origens

const PORT = process.env.PORT || 5000;
app.use(express.json());


app.get("/", function(req, res){
    res.send("Pagina inicial"); 
});


//routes for authentication
app.use('/auth', require('./routes/auth'));
app.use('/course', require('./routes/course'));

app.listen(PORT, () => console.log(`Server is running in port ${PORT} `));