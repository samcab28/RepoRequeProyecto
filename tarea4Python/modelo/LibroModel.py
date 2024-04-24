class Libro:
    def __init__(self, id_libro, nombre, autor, estado):
        self.id_libro = id_libro
        self.nombre = nombre
        self.autor = autor
        self.estado = estado

    libroAlmacenamiento = {}