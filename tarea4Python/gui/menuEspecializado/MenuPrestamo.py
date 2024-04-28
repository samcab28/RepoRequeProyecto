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
            print("\t1. Crear prestamo")
            print("\t2. Borrar prestamo")
            print("\t3. Consultar prestamo")
            print("\t4. Modificar prestamo")
            print("\t5. Consultar prestamo por id")
            print("\n\t0. Regresar menu principal")

            try:
                opcion = int(input("\nDigite una opcion: "))
            except ValueError:
                print("\nError: Por favor, ingrese un número entero.")
                continue

            if opcion == 1:
                #llamada a crear
                print("\n\nCrear préstamo")
                #mostrar los id de usuario:
                print("\nnUsuarios disponibles:")
                ConsultaUsuario.mostrarUsuarios()

                try:
                    IdUsuario = int(input("\nIngrese el Id del usuario: "))
                except:
                    print("\nERROR: el ID debe de ser un numero entero")
                    continue

                print("\n\nLibros disponibles:")
                LibrosDisponibles.mostrarLibrosDisponibles()

                try:
                    IdLibro = input("\nIngrese el ID del libro: ")
                except:
                    print("\nERROR: el ID debe de ser un numero entero")
                    continue

                fecha_prestamo = datetime.now()


                try:
                    cantidad_dias = int(input("\nDigite la cantidad de dias del préstamo: "))
                except ValueError:
                    print("\nError: Por favor, ingrese un número entero.")
                    continue

                CrearPrestamo.crearPrestamo(IdUsuario, IdLibro, fecha_prestamo, cantidad_dias)
                continue
            elif opcion == 2:
                # llamada a borrar
                print("\n\nBorrar préstamo")
                print("\nPréstamos disponibles para borrado:")
                ConsultaPrestamo.mostrarPrestamos()
                id_prestamo = input("\nIngrese el ID del préstamo a borrar: ")
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
                idPrestamo = int(input("\nIngrese el ID del prestamo: "))
                cantidad_dias = int(input("Digite la nueva cantidad de dias para el préstamo: "))
                ModificarPrestamo.modificarPrestamoFecha(idPrestamo, cantidad_dias)

                continue


            elif opcion == 5:
                #llamada a consulta por id
                print("\n\nConsulta prestamo por ID de usuario")
                print("\nUsuarios disponibles: ")
                ConsultaUsuario.mostrarUsuarios()
                idUsuario = int(input("\nDigite el ID del usuario a filtrar: "))
                PrestamoUsuario.prestamoUsuarioId(idUsuario)

            elif opcion == 0:
                break
            else:
                print("\n\nError a la hora de ingresar una opción")
                continue