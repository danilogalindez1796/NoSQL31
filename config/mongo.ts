import mongoose from 'mongoose'

export default async function connectMongo() {
  try {
    await mongoose.connect('mongodb://localhost:27017/NoSQL')
    console.log('conexion exitosa')
  } catch (e) {
    console.log('conexion no realizada' + e.message)
  }
}
