
from modelo.LibroModel import Libro

def cambiarEstado(idLibro):
    for id_libro,libro in Libro.LibroAlmacenamiento.items():
        if id_libro == idLibro:
            if libro.estado == 0:
                libro.estado = 1
                return libro
            elif libro.estado == 1:
                libro.estado = 0
                return libro
    print("Error: ese libro no existe")