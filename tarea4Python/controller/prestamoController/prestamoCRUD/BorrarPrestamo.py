from modelo.PrestamoDevModel import *

class BorrarPrestamo:

    @staticmethod
    def borrarPrestamoId(Id_prestamo):
        Id_prestamo = int(Id_prestamo)

        if Id_prestamo in PrestamoDev.PrestamoDevAlmacenamiento:
            del PrestamoDev.PrestamoDevAlmacenamiento[Id_prestamo]
            print(f"Prestamo con ID {Id_prestamo} borrado exitosamente.")
        else:
            print(f"No se encontró un usuario con ID {Id_prestamo}.")