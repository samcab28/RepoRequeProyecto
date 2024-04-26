from modelo.LibroModel import Libro

def consultarLibro(idLibro):
    for id_libro, libro in Libro.LibroAlmacenamiento.items():
        if id_libro == idLibro:
            return libro.id_libro