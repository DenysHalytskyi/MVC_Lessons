let express = require('express');
let session = require('express-session');
let bodyParser = require('body-parser');
let path = require('path');

let app = express();

const PORT = 3000; 
app.set('view engine', 'ejs'); 
app.use(express.static(path.join(__dirname, 'public'))); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(session({ secret: 'secret', resave: true, saveUninitialized: true })); 

let errorRoutes = require('./routes/error');
app.use('*', errorRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


app.use(
    session({
        secret: "secret",
        resave: false,
        saveUninitialized: true,
    }));