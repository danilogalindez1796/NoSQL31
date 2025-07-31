import UserService from '#services/UsuariosService'

const userService = new UserService()

class UserController {
  async guardar({ request, response }) {
    const { nombre, email, edad } = request.body()
    const nuevo = await userService.guardar({ nombre, email, edad })
    return response.json(nuevo)
  }
  async mostrarTodo({ request, response }) {
    const nuevo = await userService.traerDatos()
    return response.json(nuevo)
  }
  async mostrarID({ request, response, params }) {
    const { id } = params
    const nuevo = await userService.traerID(id)
    return response.json(nuevo)
  }
  async actualizar({ params, request, response }) {
    const { id } = params
    const data = request.body()

    const actualizado = await userService.actulizar(id, data)
    return response.json(actualizado)
  }
  async Eliminar({ request, response, params }) {
    const { id } = params
    const nuevo = await userService.eliminar(id)
    return response.json(nuevo)
  }
}
export default UserController
