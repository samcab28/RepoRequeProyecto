from controller.prestamoController.prestamoCRUD.ConsultaPrestamo import ConsultaPrestamo

class MenuDevolucion:
    def __init__(self):
        self.__init__

    def ejecutarMenuDevolucion(self):
        while True:
            print("\n\nBienvenido al Menu de Devolucion")
            print("1. Crear devolucion")
            print("2. Borrar devolucion")
            print("3. Consultar devolucion")
            print("0. Regresar menu principal")

            try:
                opcion = int(input("digite una opcion: "))
            except ValueError:
                print("Error: Por favor, ingrese un número entero.")
                continue

            if opcion == 1:
                print("Crear devolucion")
                print("digite el id del prestamo a devolver, prestamos disponibles:")
                ConsultaPrestamo.mostrarPrestamos()

                try:
                    id_devolucion = int(input("digite el id del prestamo a devolver"))
                except ValueError:
                    print("Error: Por favor, ingrese un número entero.")
                    continue

                continue
            elif opcion == 2:
                # llamada a borrar
                continue
            elif opcion == 3:
                #llamada a consultar
                continue

            elif opcion == 0:
                break
            else:
                print("Error a la hora de digitar un digito: ")
                continue