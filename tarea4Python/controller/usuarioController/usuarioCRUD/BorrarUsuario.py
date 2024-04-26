from modelo.UsuarioModel import *

class BorrarUsuario:

    @staticmethod
    def borrarUsuarioId(id_usuario):
        id_usuario = int(id_usuario)

        if id_usuario in Usuario.UsuarioAlmacenamiento:
            del Usuario.UsuarioAlmacenamiento[id_usuario]
            print(f"Usuario con ID {id_usuario} borrado exitosamente.")
        else:
            print(f"No se encontró un usuario con ID {id_usuario}.")