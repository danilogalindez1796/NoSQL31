import RolService from '#services/RolService'

const rolService = new RolService()

class RolController {
  async guardarRol({ request, response }) {
    const { nombre, descripcion } = request.body()
    const nuevo = await rolService.guardarRol({ nombre, descripcion })
    return response.json(nuevo)
  }
  async mostrarTodoRol({ request, response }) {
    const nuevo = await rolService.traerDatosRol()
    return response.json(nuevo)
  }
  async mostrarIDRol({ request, response, params }) {
    const {id}=params
    const nuevo = await rolService.traerIDRol(id)
    return response.json(nuevo)
  }
  async actualizarRol({ params, request, response }) {
    const { id } = params
    const data = request.body()

    const actualizado = await rolService.actulizarRol(id, data)
    return response.json(actualizado)
  }
  async EliminarRol({ request, response, params }) {
    const { id } = params
    const nuevo = await rolService.eliminarRol(id)
    return response.json(nuevo)
  }
}
export default RolController
