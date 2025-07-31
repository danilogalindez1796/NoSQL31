import Router from '@adonisjs/core/services/router'
import RolController from '../../app/controller/RolController.js'

const rol = new RolController()

Router.post('/crearRol', rol.guardarRol)
Router.get('/traerRol', rol.mostrarTodoRol)
Router.get('/traerRol/:id', rol.mostrarIDRol)
Router.put('/actualizarRol/:id', rol.actualizarRol)
Router.delete('/eliminarRol/:id', rol.EliminarRol)
