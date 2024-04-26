from modelo.LibroModel import *

class LibrosDisponibles:

    @staticmethod
    def mostrarLibrosDisponibles():
        for id_libro, libro in Libro.LibroAlmacenamiento.items():
            if libro.estado == 1:
                print(f"ID: {id_libro}, ISBN: {libro.isbn}, Nombre: {libro.nombre}, Autor: {libro.autor}, Estado: Disponible")
