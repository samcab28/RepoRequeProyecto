from datetime import datetime

from controller.usuarioController.usuarioCRUD.ConsultaUsuario import ConsultaUsuario
from controller.libroContoller.libroCRUD.ConsutaLibro import ConsultaLibro
from controller.prestamoController.prestamoCRUD.CrearPrestamo import CrearPrestamo
from controller.prestamoController.prestamoCRUD.ConsultaPrestamo import ConsultaPrestamo
class MenuPrestamo:
    def __init__(self):
        self.__init__

    def ejecutarMenuPrestamo(self):
        while True:
            print("\n\nBienvenido al Menu de Prestamo")
            print("1. Crear prestamo")
            print("2. Borrar prestamo")
            print("3. Consultar prestamo")
            print("4. Modificar prestamo")
            print("0. Regresar menu principal")

            try:
                opcion = int(input("digite una opcion: "))
            except ValueError:
                print("Error: Por favor, ingrese un número entero.")
                continue

            if opcion == 1:
                #llamada a crear
                print("Crear prestamo")
                #mostrar los id de usuario:
                print("usuarios disponibles:")
                ConsultaUsuario.mostrarUsuarios()
                IdUsuario = input("Ingrese el Id del usuario")

                print("libros disponibles:")
                ConsultaLibro.mostrarLibros()
                IdLibro = input("Ingrese el Id del libro")

                fecha_prestamo = datetime.now()


                try:
                    cantidad_dias = int(input("digite la cantidad de dias que del prestamo"))
                except ValueError:
                    print("Error: Por favor, ingrese un número entero.")
                    continue

                CrearPrestamo.crearPrestamo(IdUsuario, IdLibro, fecha_prestamo, cantidad_dias)
                continue
            elif opcion == 2:
                # llamada a borrar
                continue
            elif opcion == 3:
                #llamada a consultar
                ConsultaPrestamo.mostrarPrestamos()
                continue
            elif opcion == 4:
                #llamada a modificar
                continue

            elif opcion == 0:
                break
            else:
                print("Error a la hora de digitar un digito: ")
                continue