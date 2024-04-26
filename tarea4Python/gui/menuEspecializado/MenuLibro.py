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
            print("1. Nombre Libro")
            print("2. Autor Libro")
            print("3. ISBN Libro")
            print("0. Regresar menu libro")

            try:
                opcion = int(input("Escoga la opcion que desea modificar: "))
                if opcion != 0:
                    idLibro = int(input("Escoga el id del libro: "))
            except ValueError:
                print("Error: Por favor, ingrese un número entero.")
                continue

            if opcion == 1:
                #llamada a modificar nombre
                print("Nombre libro")
                nombreNuevo = input("Escribe el nuevo nombre del libro: ")
                ModificarLibro.modificarLibroNombre(idLibro, nombreNuevo)
                continue
            elif opcion == 2:
                # llamada a modificar autor
                print("Autor libro")
                autorNuevo = input("Escribe el nuevo autor del libro: ")
                ModificarLibro.modificarLibroAutor(idLibro, autorNuevo)
                continue
            elif opcion == 3:
                #llamada a modificar ISBN
                print("ISBN libro")
                isbnNuevo = input("Escribe el nuevo ISBN del libro: ")
                ModificarLibro.modificarLibroISBN(idLibro, isbnNuevo)
                continue
            elif opcion == 0:
                break
            else:
                print("Error: datos inválidos ")
                continue
    def ejecutarMenuLibro(self):
        while True:
            print("\n\nBienvenido al Menu de Libro")
            print("1. Crear Libro")
            print("2. Borrar Libro")
            print("3. Consultar Libro")
            print("4. Modificar Libro")
            print("0. Regresar menu principal")

            try:
                opcion = int(input("digite una opcion: "))
            except ValueError:
                print("Error: Por favor, ingrese un número entero.")
                continue

            if opcion == 1:
                #llamada a crear

                # no se ha terminado la funcion, hablar acerca del estado del libro
                print("Crear libro")
                LibroISBN = input("Ingrese el ISBN del libro: ")
                LibroNombre = input("Ingrese el nombre del libro: ")
                LibroAutor = input("Ingrese el autor del libro: ")
                CrearLibro.crearLibro(LibroISBN,LibroNombre,LibroAutor)

                continue
            elif opcion == 2:
                # llamada a borrar
                # llamada a borrar
                print("Borrar libro")
                print("Libros disponibles para borrar: ")
                ConsultaLibro.mostrarLibros()
                idLibro = input("Ingrese el id del libro a borrar")
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
                print("Error a la hora de digitar un digito: ")
                continue