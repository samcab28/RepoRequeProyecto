#se toma en cuenta el prestamo y devolucion segun el estado
#1 para que este en prestamo y 0 para devolucion

#usado para la agregacion de dias de fecha final
from datetime import timedelta
class PrestamoDev:
    contadorId = 1;
    PrestamoDevAlmacenamiento = {}

    @staticmethod
    def generarIdPrestamoDev():
        id_PrestamoDev = PrestamoDev.contadorId
        PrestamoDev.contadorId += 1
        return id_PrestamoDev

    def __init__(self, id_PrestamoDev, estado_Prestamo,id_Usuario, id_Libro, fecha_Inicio, dias_Prestamo, fecha_Entrega):
        self.id_PrestamoDev = id_PrestamoDev
        self.estado_Prestamo = estado_Prestamo
        self.id_Usuario = id_Usuario
        self.id_Libro = id_Libro
        self.fecha_Inicio = fecha_Inicio
        self.dias_Prestamo = dias_Prestamo
        self.fecha_Entrega = fecha_Entrega
