from controller.prestamoController.prestamoCRUD.ConsultaPrestamo import ConsultaPrestamo
from controller.devolucionController.devolucionCRUD.ConsultaDevolucion import ConsultaDevolucion
from controller.devolucionController.devolucionCRUD.CrearDevolucion import CrearDevolucion
from controller.devolucionController.devolucionCRUD.BorrarDevolucion import BorrarPrestamo
from controller.devolucionController.DevolucionPorUsuario import DevolucionUsuario
from controller.usuarioController.usuarioCRUD.ConsultaUsuario import ConsultaUsuario
class MenuDevolucion:
    def __init__(self):
        self.__init__

    def ejecutarMenuDevolucion(self):
        while True:
            print("\n\nBienvenido al Menu de Devolucion")
            print("\t1. Crear devolucion")
            print("\t2. Borrar devolucion")
            print("\t3. Consultar devolucion")
            print("\t4. Consultar por usuario id")
            print("\n\t0. Regresar menu principal")

            try:
                opcion = int(input("\nDigite una opción: "))
            except ValueError:
                print("\nError: Por favor, ingrese un número entero.")
                continue

            if opcion == 1:
                print("\n\nCrear devolucion")
                print("\nPréstamos disponibles:")
                ConsultaPrestamo.mostrarPrestamos()

                try:
                    id_devolucion = int(input("\nDigite el id del préstamo a devolver: "))
                except ValueError:
                    print("\nError: Por favor, ingrese un número entero.")
                    continue

                CrearDevolucion.CrearDevolucionId(id_devolucion)

                continue
            elif opcion == 2:
                # llamada a borrar
                print("\n\nBorrar Devolucion")
                print("\nDevoluciones disponibles para borrar: ")
                ConsultaDevolucion.mostrarDevolucion()
                idDevolucion = input("\nDigite el id de la devolución que desea borrar: ")
                BorrarPrestamo.borrarDevolucionId(idDevolucion)
                continue
            elif opcion == 3:
                #llamada a consultar
                ConsultaDevolucion.mostrarDevolucion()
                continue

            elif opcion == 4:
                #llamada a consultar por usuario id
                print("\n\nDevoluciones realizadas por ID usuario")
                print("\nID disponibles: ")
                ConsultaUsuario.mostrarUsuarios()
                try:
                    usuario_id = int(input("\nDigite el id a filtrar: "))
                except:
                    print("\nERROR: digite un número entero")
                    continue
                DevolucionUsuario.devolucionUsuarioId(usuario_id)

            elif opcion == 0:
                break
            else:
                print("\n\nError a la hora de ingresar una opción")
                continue