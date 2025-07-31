import roles, { Rol } from '#models/roles'

class RolService {
  async guardarRol(data: Rol) {
    const nuevo = await roles.create(data)
    return nuevo
  }
  async traerDatosRol() {
    return await roles.find()
  }
  async traerIDRol(id: string) {
    return await roles.findById(id)
  }
  async actulizarRol(id: string, data: Rol) {
    return await roles.findByIdAndUpdate(id, data, { new: true })
  }
  async eliminarRol(id: string) {
    return await roles.findByIdAndDelete(id)
  }
}
export default RolService
