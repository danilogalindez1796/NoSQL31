import Router from '@adonisjs/core/services/router'
import UserController from '../../app/controller/UsuariosController.js'

const user = new UserController()

Router.post('/Crear', user.guardar)
Router.get('/traer', user.mostrarTodo)
Router.get('/traer/:id', user.mostrarID)
Router.put('/actualizar/:id', user.actualizar)
Router.delete('/eliminar/:id', user.Eliminar)
