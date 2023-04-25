const mongoose = require('mongoose');

const connectwithDB=()=>{
    mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        
    })
    .then(console.log('DB connected'))
    .catch(error =>{
        console.log('DB Error')
        console.log(error)
        process.exit(1)
    })
    
}

module.exports = connectwithDB;
