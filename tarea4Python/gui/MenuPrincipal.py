from gui.menuEspecializado.MenuDevolucion import MenuDevolucion
from gui.menuEspecializado.MenuLibro import MenuLibro
from gui.menuEspecializado.MenuPrestamo import MenuPrestamo
from gui.menuEspecializado.MenuUsuario import MenuUsuario
from gui.menuEspecializado.MenuHistorial import  MenuHistorial

# instancias
menuDevolucion = MenuDevolucion()
menuLibro = MenuLibro()
menuPrestamo = MenuPrestamo()
menuUsuario = MenuUsuario()
menuHistorial = MenuHistorial()

class MenuPrincipal:
    def __init__(self):
        self.__init__

    def ejecutarMenuPrincipal(self):
        while True:
            print("\n\nBievenido al Menu Principal:")
            print("\t1. Libro")
            print("\t2. Usuario")
            print("\t3. Préstamo")
            print("\t4. Devolucion")
            print("\t5. Historial completo")
            print("\n\t0. Salir del programa")

            try:
                opcion = int(input("\nDigite una opcion: "))
            except ValueError:
                print("\nError: Por favor, ingrese un número entero.")
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

            elif opcion == 5:
                ##llamada a historial completo
                menuHistorial.ejecutarMenuHistoria()
                continue

            elif opcion == 0:
                break

            else:
                print("\n\nError a la hora de ingresar una opción")
                continue
