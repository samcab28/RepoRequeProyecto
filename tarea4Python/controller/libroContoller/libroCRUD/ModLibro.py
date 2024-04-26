from modelo.LibroModel import Libro

class ModificarLibro:

    @staticmethod
    def modificarLibroNombre(idLibro, nombreLibro):
        for id_libro, libro in Libro.LibroAlmacenamiento.items():
            if id_libro == idLibro:
                libro.nombre = nombreLibro
                return libro
        print("\nERROR: No existe un libro con ese ID")
    def modificarLibroAutor(idLibro, autorLibro):
        for id_libro, libro in Libro.LibroAlmacenamiento.items():
            if id_libro == idLibro:
                libro.autor = autorLibro
                return libro
        print("\nERROR: No existe un libro con ese ID")
    def modificarLibroISBN(idLibro, isbnLibro):
        for id_libro, libro in Libro.LibroAlmacenamiento.items():
            if id_libro == idLibro:
                libro.isbn = isbnLibro
                return libro
        print("\nERROR: No existe un libro con ese ID")