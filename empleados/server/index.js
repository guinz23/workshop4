const express= require("express");
const app=express();
const morgan= require('morgan');
const cors = require('cors');
const{mongoose}= require('./database');
app.use(cors({origin: 'http://localhost:4200'}));
//setting 
app.set('port',process.env.PORT|| 3000 );

//Middleware
app.use(morgan('dev'));
app.use(express.json());
//Routes

app.use('/api/employees',require('./routes/employee.routes'))

// Starting the server
app.listen(app.get('port'),()=>{
  console.log("server on port",app.get('port'));
});