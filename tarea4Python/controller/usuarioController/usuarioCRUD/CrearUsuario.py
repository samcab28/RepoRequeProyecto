from modelo.UsuarioModel import *

class CrearUsuario:
    @staticmethod
    def crearUsuario(nombre):
        id_usuario = Usuario.generarId()
        nuevo_usuario = Usuario(id_usuario, nombre)
        Usuario.UsuarioAlmacenamiento[id_usuario] = nuevo_usuario