from gui.menuEspecializado.MenuDevolucion import MenuDevolucion
from gui.menuEspecializado.MenuLibro import MenuLibro
from gui.menuEspecializado.MenuPrestamo import MenuPrestamo
from gui.menuEspecializado.MenuUsuario import MenuUsuario

# instancias
menuDevolucion = MenuDevolucion()
menuLibro = MenuLibro()
menuPrestamo = MenuPrestamo()
menuUsuario = MenuUsuario()

class MenuPrincipal:
    def __init__(self):
        self.__init__

    def ejecutarMenuPrincipal(self):
        while True:
            print("\n\nBievenido al Menu Principal:")
            print("1. Libro")
            print("2. Usuario")
            print("3. Préstamo")
            print("4. Devolucion")
            print("0. Salir del programa")

            try:
                opcion = int(input("digite una opcion: "))
            except ValueError:
                print("Error: Por favor, ingrese un número entero.")
                continue

            if opcion == 1:
                # llamada a menu de libro
                menuLibro.ejecutarMenuLibro()
                continue

            elif opcion == 2:
                # llamada a menu de Usario
                menuUsuario.ejecutarMenuUsuario()
                continue

            elif opcion == 3:
                # llamada a menu de prestamo
                menuPrestamo.ejecutarMenuPrestamo()
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
