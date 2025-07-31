import usuarios, { Usuarios } from '#models/usuarios'

class UserService {
  async guardar(data: Usuarios) {
    const nuevo = await usuarios.create(data)
    return nuevo
  }
  async traerDatos() {
    return await usuarios.find()
  }
  async traerID(id: string) {
    return await usuarios.findById(id)
  }
  async actulizar(id: string, data: Usuarios) {
    return await usuarios.findByIdAndUpdate(id, data, { new: true })
  }
  async eliminar(id: string) {
    return await usuarios.findByIdAndDelete(id)
  }
}
export default UserService
