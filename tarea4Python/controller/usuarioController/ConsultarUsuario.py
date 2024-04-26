
from modelo.UsuarioModel import Usuario

def consultarUsuario(idUsuario):
    for id_User, usuario in Usuario.UsuarioAlmacenamiento.items():
        if id_User == idUsuario:
            return usuario.id_usuario