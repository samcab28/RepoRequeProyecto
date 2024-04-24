from controller.libroContoller.libroCRUD.ConsutaLibro import ConsultaLibro
from controller.libroContoller.libroCRUD.CrearLibro import CrearLibro
class MenuLibro:
    def __init__(self):
        self.__init__

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
                CrearLibro.crearLibro(LibroISBN,LibroNombre,LibroAutor,1)

                continue
            elif opcion == 2:
                # llamada a borrar
                continue
            elif opcion == 3:
                #llamada a consultar

                ConsultaLibro.mostrarLibros()
                continue
            elif opcion == 4:
                #llamada a modificar
                continue

            elif opcion == 0:
                break
            else:
                print("Error a la hora de digitar un digito: ")
                continue