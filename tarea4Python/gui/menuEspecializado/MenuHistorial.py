from controller.historialController.HistorialCompleto import ConsultaHistorial
from controller.usuarioController.usuarioCRUD.ConsultaUsuario import ConsultaUsuario
from controller.historialController.HistorialUsuario import HistorialUsuario
class MenuHistorial:

    def __init__(self):
        self.__init__

    def ejecutarMenuHistoria(self):
        while True:
            print("\n\nBienvenido al menú de historial")
            print("\n\tEste menú incluye la información completa de préstamos y devoluciones")
            print("\t1. Mostrar historial")
            print("\t2. Mostrar historial por usuario")
            print("\n\t0. Regresar menú principal")

            try:
                opcion = int(input("\nDigite una opcion: "))
            except:
                print("\nError: Por favor, ingrese un numero entero")
                continue

            if opcion == 1:
                print("\n\nMostrar historial completo:\n")
                ConsultaHistorial.mostrarHistorial()

            if opcion ==2:
                print("\n\nMostrar historial por usuario:\n")
                ConsultaUsuario.mostrarUsuarios()

                try:
                    userId = int(input("\nDigite el ID del usuario a filtrar: "))
                except:
                    print("\nERROR: digite un número entero")
                    continue

                HistorialUsuario.mostralHistorialUsuario(userId)

            elif opcion == 0:
                break

            else:
                ##print("\n\nError a la hora de ingresar una opción")
                continue
