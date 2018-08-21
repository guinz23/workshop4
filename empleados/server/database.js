const mongoose= require('mongoose');
// se necesita incluir el{ useNewUrlParser:true }  dentro del mongoose.connect
const URI='mongodb://127.0.0.1:27017/mean-crud';

mongoose.connect(URI,{ useNewUrlParser:true })
.then(db => console.log('db is conected'))
.catch(err =>console.error(err));

module.exports=mongoose;