from datetime import datetime

from controller.usuarioController.usuarioCRUD.ConsultaUsuario import ConsultaUsuario
from controller.libroContoller.libroCRUD.ConsutaLibro import ConsultaLibro
from controller.prestamoController.prestamoCRUD.CrearPrestamo import CrearPrestamo
from controller.prestamoController.prestamoCRUD.ConsultaPrestamo import ConsultaPrestamo
from controller.prestamoController.prestamoCRUD.ModPrestamo import ModificarPrestamo
from controller.prestamoController.prestamoCRUD.BorrarPrestamo import BorrarPrestamo
from controller.libroContoller.ConsultaLibroDisponible import  LibrosDisponibles
from controller.prestamoController.PrestamoPorUsuario import PrestamoUsuario
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
            print("5. Consultar prestamo por id")
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
                IdUsuario = int(input("Ingrese el Id del usuario"))

                print("libros disponibles:")
                LibrosDisponibles.mostrarLibrosDisponibles()
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
                print("borrar prestamo")
                print("prestamos disponibles para borrado:")
                ConsultaPrestamo.mostrarPrestamos()
                id_prestamo = input("Ingrese el id del prestamo a borrar")
                BorrarPrestamo.borrarPrestamoId(id_prestamo)
                continue
            elif opcion == 3:
                #llamada a consultar
                ConsultaPrestamo.mostrarPrestamos()
                continue
            elif opcion == 4:
                #llamada a modificar
                print("\n\nModificar préstamo (FECHA DE ENTREGA)")
                ConsultaPrestamo.mostrarPrestamos()
                idPrestamo = int(input("\nIngrese el ID del prestamo"))
                cantidad_dias = int(input("Digite la nueva cantidad de dias para el préstamo: "))
                ModificarPrestamo.modificarPrestamoFecha(idPrestamo, cantidad_dias)

                continue


            elif opcion == 5:
                #llamada a consulta por id
                print("Consulta prestamo por id de usuario")
                print("usuarios disponibles: ")
                ConsultaUsuario.mostrarUsuarios()


                idUsuario = int(input("digite el id del usuario a filtrar"))
                PrestamoUsuario.prestamoUsuarioId(idUsuario)

            elif opcion == 0:
                break
            else:
                print("Error a la hora de digitar un digito: ")
                continue