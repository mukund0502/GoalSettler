const mongoose = require('mongoose')

const connectdb = async ()=>{
    try{
        const connection = await mongoose.connect(process.env.MONGO_URI)
        console.log(`mongoDB connected : ${connection.connection.host}`.cyan.underline);
    }catch(error){
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectdb