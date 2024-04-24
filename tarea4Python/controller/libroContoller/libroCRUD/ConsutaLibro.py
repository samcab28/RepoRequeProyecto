from modelo.LibroModel import Libro

class ConsultaLibro:

    @staticmethod
    def mostrarLibros():
        for id_libro, libro in Libro.LibroAlmacenamiento.items():
            estado = "Disponible" if libro.estado == 1 else "Ocupado"
            print(f"ID: {id_libro}, ISBN: {libro.isbn}, Nombre: {libro.nombre}, Autor: {libro.autor}, Estado: {estado}")
