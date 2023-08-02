

import mongoose from 'mongoose'
const DB = async() => {
    try {
        await mongoose.connect(process.env.BDURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Base de datos online")
    } catch (error) {
        console.log(error)
        throw new Error("Error al iniciar la base de datos")
    }
}


export default DB
