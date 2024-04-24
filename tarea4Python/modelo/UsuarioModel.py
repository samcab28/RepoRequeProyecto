class Usuario:
    contadorId = 1
    UsuarioAlmacenamiento = {}

    @staticmethod
    def generarId():
        id_usuario = Usuario.contadorId
        Usuario.contadorId += 1
        return id_usuario

    def __init__(self, id_usuario, nombre):
        self.id_usuario = id_usuario
        self.nombre = nombre