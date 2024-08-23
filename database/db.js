import mongoose from "mongoose";
import colors from 'colors';

const connectBD = async () => {
    try {

        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to database ${conn.connection.host}`.bgMagenta.white);
    } catch (err) {
        console.log(`Error in mongoDB is ${err}`.bgRed.white);
    }
};

export default connectBD;
