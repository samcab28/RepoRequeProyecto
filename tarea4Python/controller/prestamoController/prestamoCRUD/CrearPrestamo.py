from modelo.PrestamoDevModel import PrestamoDev
from datetime import timedelta
from controller.libroContoller import CambiarEstadoLibro, ConsultarEstadoLibro, ConsultarLibro
from controller.usuarioController import ConsultarUsuario
class CrearPrestamo:

    @staticmethod
    def crearPrestamo(Usuario, Libro, FechaInicio, CantidadDias):
        if ConsultarUsuario.consultarUsuario(int(Usuario)):
            if ConsultarLibro.consultarLibro(int(Libro)):
                if ConsultarEstadoLibro.consultarEstado(int(Libro)) == 1:
                    idPrestamo = PrestamoDev.generarIdPrestamoDev()
                    FechaDevolucion = FechaInicio + timedelta(days=CantidadDias)
                    nuevo_Prestamo = PrestamoDev(idPrestamo, 1, Usuario, Libro, FechaInicio, CantidadDias, FechaDevolucion)
                    if idPrestamo not in PrestamoDev.PrestamoDevAlmacenamiento:
                        PrestamoDev.PrestamoDevAlmacenamiento[idPrestamo] = nuevo_Prestamo
                        CambiarEstadoLibro.cambiarEstado(int(Libro))
                        print("\nPréstamo Creado")
                    else:
                        raise ValueError("\nERROR: El préstamo ya existe")
                else:
                    print("\nERROR: El libro no está disponible")
            else:
                print("\nERROR: El libro no existe")
        else:
            print("\nERROR: El usuario no existe")