from controller.usuarioController.usuarioCRUD.CrearUsuario import CrearUsuario
from controller.usuarioController.usuarioCRUD.ConsultaUsuario import ConsultaUsuario
from controller.usuarioController.usuarioCRUD.BorrarUsuario import BorrarUsuario
from controller.usuarioController.usuarioCRUD.ModUsuario import ModificarUsuario


class MenuUsuario:
    def __init__(self):
        self.__init__

    def ejecutarMenuUsuario(self):
        while True:
            print("\n\nBienvenido al Menu de Usuario")
            print("\t1. Crear Usuario")
            print("\t2. Borrar Usuario")
            print("\t3. Consultar Usuario")
            print("\t4. Modificar Usuario")
            print("\n\t0. Regresar menu principal")

            try:
                opcion = int(input("\nDigite una opcion: "))
            except ValueError:
                print("Error: Por favor, ingrese un número entero.")
                continue

            if opcion == 1:
                #llamada a crear
                print("\n\nCrear Usuario")
                NombreUsuario = input("\nDigite el nombre del usuario: ")
                CrearUsuario.crearUsuario(NombreUsuario)

                continue
            elif opcion == 2:
                # llamada a borrar
                print("\n\nBorrar usuario")
                print("\nUsuarios disponibles para borrar:\n")
                ConsultaUsuario.mostrarUsuarios()
                idUsuario = input("\nDigite el id del usuario a borrar: ")
                BorrarUsuario.borrarUsuarioId(idUsuario)
                continue
            elif opcion == 3:
                #llamada a consultar
                print("\n\nLista de Usuarios: \n")
                ConsultaUsuario.mostrarUsuarios()
                continue
            elif opcion == 4:
                #llamada a modificar

                print("\n\nModificar Usuario (NOMBRE)")
                ConsultaUsuario.mostrarUsuarios()
                idUsuario = int(input("\nDigite el ID del usuario a modificar: "))
                nombreUsuario = input("\nDigite el nuevo nombre del usuario: ")

                ModificarUsuario.modificarLibroNombre(idUsuario, nombreUsuario)
                continue
            elif opcion == 0:
                break
            else:
                print("\n\nError a la hora de ingresar una opción")
                continue