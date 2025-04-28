const mongoose = require('mongoose')

const connectDB = async() => {
    try{
        await mongoose.connect( process.env.MONGODB, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MONGODB უკუკავშირი წარმატებით შედგა");
    }catch( error ) {
        console.log("MONGODB-ს შორის კავშირი არ შედგა! ", error.message);
    }
}

module.exports = connectDB