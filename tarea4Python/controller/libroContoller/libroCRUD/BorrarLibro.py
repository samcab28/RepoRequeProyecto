from modelo.LibroModel import *


class BorrarLibro:

    @staticmethod
    def borrarLibroId(id_Libro):
        id_Libro = int(id_Libro)
        if id_Libro in Libro.LibroAlmacenamiento:
            del Libro.LibroAlmacenamiento[id_Libro]
            print(f"Libro con ID {id_Libro} borrado exitosamente.")
        else:
            print(f"No se encontró un libro con ID {id_Libro}.")