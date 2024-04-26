from controller.usuarioController.usuarioCRUD.CrearUsuario import CrearUsuario
from controller.usuarioController.usuarioCRUD.ConsultaUsuario import ConsultaUsuario
from controller.usuarioController.usuarioCRUD.BorrarUsuario import BorrarUsuario

class MenuUsuario:
    def __init__(self):
        self.__init__

    def ejecutarMenuUsuario(self):
        while True:
            print("\n\nBienvenido al Menu de Usuario")
            print("1. Crear Usuario")
            print("2. Borrar Usuario")
            print("3. Consultar Usuario")
            print("4. Modificar Usuario")
            print("0. Regresar menu principal")

            try:
                opcion = int(input("digite una opcion: "))
            except ValueError:
                print("Error: Por favor, ingrese un número entero.")
                continue

            if opcion == 1:
                #llamada a crear
                print("Crear Usuario")
                NombreUsuario = input("digite el nombre del usuario: ")
                CrearUsuario.crearUsuario(NombreUsuario)

                continue
            elif opcion == 2:
                print("borrar usuario")
                print("usuarios disponibles para borrar:")
                ConsultaUsuario.mostrarUsuarios()
                idUsuario = input("digite el id del usuario a borrar")
                BorrarUsuario.borrarUsuarioId(idUsuario)
                continue
            elif opcion == 3:
                #llamada a consultar
                ConsultaUsuario.mostrarUsuarios()
                continue
            elif opcion == 4:
                #llamada a modificar
                continue

            elif opcion == 0:
                break
            else:
                print("Error a la hora de digitar un digito: ")
                continue