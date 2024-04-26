from modelo.LibroModel import Libro

class CrearLibro:

    @staticmethod
    def crearLibro(isbn, nombre, autor):
        id_libro = Libro.generarIdLibro()
        nuevo_libro = Libro(id_libro, isbn, nombre, autor, 1)
        Libro.LibroAlmacenamiento[id_libro] = nuevo_libro
