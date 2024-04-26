from modelo.UsuarioModel import Usuario

class ModificarUsuario:

    @staticmethod
    def modificarLibroNombre(idUsuario, nombreUsuario):
        for id_Usuario, usuario in Usuario.UsuarioAlmacenamiento.items():
            if id_Usuario == idUsuario:
                usuario.nombre = nombreUsuario
                return usuario
        print("\nERROR: No existe un usuario con ese ID")