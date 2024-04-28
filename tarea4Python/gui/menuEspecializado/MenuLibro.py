from controller.libroContoller.libroCRUD.ConsutaLibro import ConsultaLibro
from controller.libroContoller.libroCRUD.CrearLibro import CrearLibro
from controller.libroContoller.libroCRUD.BorrarLibro import BorrarLibro
from controller.libroContoller.libroCRUD.ModLibro import ModificarLibro
class MenuLibro:
    def __init__(self):
        self.__init__

    def ejecutarMenuModificar(self):
        while True:
            print("\nMenú de modificar")
            print("\t1. Nombre Libro")
            print("\t2. Autor Libro")
            print("\t3. ISBN Libro")
            print("\n\t0. Regresar menu libro")

            try:
                opcion = int(input("\tEscoga la opcion que desea modificar: "))
                if opcion != 0:
                    idLibro = int(input("Escoga el id del libro: "))
            except ValueError:
                print("\nError: Por favor, ingrese un número entero.")
                continue

            if opcion == 1:
                #llamada a modificar nombre
                print("\n\nNombre libro")
                nombreNuevo = input("\nEscribe el nuevo nombre del libro: ")
                ModificarLibro.modificarLibroNombre(idLibro, nombreNuevo)
                continue
            elif opcion == 2:
                # llamada a modificar autor
                print("\n\nAutor libro")
                autorNuevo = input("\nEscribe el nuevo autor del libro: ")
                ModificarLibro.modificarLibroAutor(idLibro, autorNuevo)
                continue
            elif opcion == 3:
                #llamada a modificar ISBN
                print("\n\nISBN libro")
                isbnNuevo = input("\nEscribe el nuevo ISBN del libro: ")
                ModificarLibro.modificarLibroISBN(idLibro, isbnNuevo)
                continue
            elif opcion == 0:
                break
            else:
                print("\nError: datos inválidos ")
                continue
    def ejecutarMenuLibro(self):
        while True:
            print("\n\nBienvenido al Menu de Libro")
            print("\t1. Crear Libro")
            print("\t2. Borrar Libro")
            print("\t3. Consultar Libro")
            print("\t4. Modificar Libro")
            print("\n\t0. Regresar menu principal")

            try:
                opcion = int(input("\nDigite una opcion: "))
            except ValueError:
                print("\nError: Por favor, ingrese un número entero.")
                continue

            if opcion == 1:
                #llamada a crear

                # no se ha terminado la funcion, hablar acerca del estado del libro
                print("\n\nCrear libro")
                LibroISBN = input("\nIngrese el ISBN del libro: ")
                LibroNombre = input("\nIngrese el nombre del libro: ")
                LibroAutor = input("\nIngrese el autor del libro: ")
                CrearLibro.crearLibro(LibroISBN,LibroNombre,LibroAutor)

                continue
            elif opcion == 2:
                # llamada a borrar
                # llamada a borrar
                print("\n\nBorrar libro")
                print("\nLibros disponibles para borrar: \n")
                ConsultaLibro.mostrarLibros()
                idLibro = input("\nIngrese el id del libro a borrar: ")
                BorrarLibro.borrarLibroId(idLibro)
                continue
            elif opcion == 3:
                #llamada a consultar

                ConsultaLibro.mostrarLibros()
                continue
            elif opcion == 4:
                #llamada a modificar
                print("\n\n")
                ConsultaLibro.mostrarLibros()
                self.ejecutarMenuModificar()
                continue

            elif opcion == 0:
                break
            else:
                print("\n\nError a la hora de ingresar una opción")
                continue