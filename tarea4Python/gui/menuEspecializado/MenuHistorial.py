from controller.historialController.HistorialCompleto import ConsultaHistorial
from controller.usuarioController.usuarioCRUD.ConsultaUsuario import ConsultaUsuario
from controller.historialController.HistorialUsuario import HistorialUsuario
class MenuHistorial:

    def __init__(self):
        self.__init__

    def ejecutarMenuHistoria(self):
        while True:
            print("\n\nBienvenido al menu de historial")
            print("este menu incluye la informacion completa de prestamos y devoluciones")
            print("1. mostrar historial")
            print("2. mostrar historial por usuario")
            print("0. regresar menu principal")

            try:
                opcion = int(input("digite una opcion:"))
            except:
                print("Error: Por favor, ingrese un numero entero")
                continue

            if opcion == 1:
                print("Mostrar historial completo")
                ConsultaHistorial.mostrarHistorial()

            if opcion ==2:
                print("Mostrar historial por usuario")
                ConsultaUsuario.mostrarUsuarios()

                try:
                    userId = int(input("digite el id del usuario a filtrar"))
                except:
                    print("digite un numero entero")
                    continue

                HistorialUsuario.mostralHistorialUsuario(userId)

            elif opcion == 0:
                break

            else:
                print("Error a la hora de digitar:")
                continue
