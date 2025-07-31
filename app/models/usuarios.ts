import { Document, Schema, Types } from 'mongoose'
import mongoose from 'mongoose'

export type Usuarios = Document & {
  nombre: String
  email: String
  edad: Number
  rol_id?: Types.ObjectId
}
const UserSchema = new Schema<Usuarios>({
  nombre: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  edad: { type: Number },
  rol_id: { type: Schema.Types.ObjectId, ref: 'roles' },
})
export default mongoose.model<Usuarios>('usuarios', UserSchema)
