from modelo.PrestamoDevModel import PrestamoDev
from datetime import timedelta
from controller.libroContoller import CambiarEstadoLibro

class CrearPrestamo:

    @staticmethod
    def crearPrestamo(Usuario, Libro, FechaInicio, CantidadDias):
        idPrestamo = PrestamoDev.generarIdPrestamoDev()
        FechaDevolucion = FechaInicio + timedelta(days=CantidadDias)
        nuevo_Prestamo = PrestamoDev(idPrestamo, 1, Usuario, Libro, FechaInicio, CantidadDias, FechaDevolucion)
        if idPrestamo not in PrestamoDev.PrestamoDevAlmacenamiento:
            PrestamoDev.PrestamoDevAlmacenamiento[idPrestamo] = nuevo_Prestamo
            CambiarEstadoLibro.cambiarEstado(int(Libro))
        else:
            raise ValueError("El préstamo ya existe")
