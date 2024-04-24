class Libro:
    contadorId = 1
    LibroAlmacenamiento = {}

    @staticmethod
    def generarIdLibro():
        id_libro = Libro.contadorId
        Libro.contadorId += 1
        return id_libro
    def __init__(self, id_libro, isbn, nombre, autor, estado):
        self.id_libro = id_libro
        self.isbn = isbn
        self.nombre = nombre
        self.autor = autor
        self.estado = estado
