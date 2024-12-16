
import mongoose from "mongoose";

type ConnectionObject={
  isconnect?: number
}

const connection : ConnectionObject = {}

async function dbconnect():Promise<void> {
    if (connection.isconnect) {
        console.log("Data base is already connected")
        return
    }

    try {
        const db = await mongoose.connect(process.env.MONGODB_URI || "", {})

        connection.isconnect = db.connections[0].readyState
        console.log("data is connected succfully")
    } catch (error) {
        console.log("database is no connected", error)

        process.exit(1)
        
    }
}

export default dbconnect;