import { Document, Schema } from 'mongoose'
import mongoose from 'mongoose'

export type Rol = Document & {
  nombre: string
  descripcion: string
}
const RolSchema = new Schema<Rol>({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true, unique: true },
})
export default mongoose.model<Rol>('roles', RolSchema)
