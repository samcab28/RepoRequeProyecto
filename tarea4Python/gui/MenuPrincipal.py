from gui.menuEspecializado.MenuDevolucion import *

# instancias
menuDevolucion = MenuDevolucion()


class MenuPrincipal:
    def __init__(self):
        self.__init__

    def ejecutarMenuPrincipal(self):
        while True:
            print("Bievenido al Menu Principal:")
            print("1. Libro")
            print("2. Usuario")
            print("3. Préstamo")
            print("4. Devolucion")
            print("0. Salir del programa")

            opcion = int(input("digite una opcion: "))

            if opcion == 1:
                # llamada a menu de libro
                continue

            elif opcion == 2:
                # llamada a menu de Usario
                continue

            elif opcion == 3:
                # llamada a menu de prestamo
                continue

            elif opcion == 4:
                ##llamada a menude devolucion
                menuDevolucion.ejecutarMenuDevolucion()
                continue

            elif opcion == 0:
                break

            else:
                print("Error a la hora de digitar  un digito: ")
                continue
