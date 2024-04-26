from modelo.PrestamoDevModel import *

class BorrarPrestamo:

    @staticmethod
    def borrarDevolucionId(Id_Devolucion):

        Id_Devolucion = int(Id_Devolucion)

        if Id_Devolucion in PrestamoDev.PrestamoDevAlmacenamiento:
            del PrestamoDev.PrestamoDevAlmacenamiento[Id_Devolucion]
            print(f"Devolucion con ID {Id_Devolucion} borrado exitosamente.")
        else:
            print(f"No se encontró un usuario con ID {Id_Devolucion}.")