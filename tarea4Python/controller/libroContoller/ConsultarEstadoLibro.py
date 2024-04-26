
from modelo.LibroModel import Libro

def consultarEstado(idLibro):
    for id_libro,libro in Libro.LibroAlmacenamiento.items():
        if id_libro == idLibro:
            return libro.estado