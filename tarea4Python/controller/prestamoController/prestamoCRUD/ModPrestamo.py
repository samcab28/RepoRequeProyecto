from modelo.PrestamoDevModel import PrestamoDev
from datetime import timedelta
class ModificarPrestamo:

    @staticmethod
    def modificarPrestamoFecha(idPrestamo, nuevaCantidadDias):
        for id_prestamo, prestamoDev in PrestamoDev.PrestamoDevAlmacenamiento.items():
            if id_prestamo == idPrestamo:
                prestamoDev.fecha_Entrega = prestamoDev.fecha_Inicio + timedelta(days=nuevaCantidadDias)
                return prestamoDev
        print("\nERROR: No existe un préstamo con ese ID")