from modelo.UsuarioModel import Usuario

class ConsultaUsuario:
    @staticmethod
    def mostrarUsuarios():
        for id_usuario, usuario in Usuario.UsuarioAlmacenamiento.items():
            print(f"ID: {id_usuario}, Nombre: {usuario.nombre}")