import mongoose from 'mongoose';

const connectMongo = async () => {
    try {
        console.log('process.env.MONGO_URL: ' + process.env.MONGO_URL);
        const { connection } = await mongoose.connect(process.env.MONGO_URL.replace("<PASSWORD>", process.env.DB_PASSWORD));
        console.log(connection.readyState)
        if(connection.readyState == 1){
            console.log('DB Connected Successfully');
            return Promise.resolve(true)
        }
    } catch (error) { 
        return Promise.reject(error)
    }
    // const DATABASE_URI = process.env.MONGO_URL.replace("<PASSWORD>", process.env.DB_PASSWORD);
    // try {
    //     await mongoose.connect(DATABASE_URI, {
    //         useUnifiedTopology: true,
    //         useNewUrlParser: true
    //     }).then((con) => {
    //         // console.log(con.connection),
    //         console.log('DB Connected Successfully');
    //     })
    // } catch (err) { 
    //     return Promise.reject(error)
    // }
}

export default connectMongo;