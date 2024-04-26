from modelo.PrestamoDevModel import *
from controller.prestamoController.ConsultarPrestamo import consultarPrestamo
from controller.prestamoController.ConsultarEstadoPrestamo import consultarEstadoPrestamo
from controller.devolucionController.CambiarEstadoPrestamo import cambiarEstadoPrestamo


class CrearDevolucion:

    @staticmethod
    def CrearDevolucionId(id_prestamo):

        id_prestamo = int(id_prestamo)

        if consultarPrestamo(id_prestamo):
            if consultarEstadoPrestamo(id_prestamo) == 1:
                cambiarEstadoPrestamo(id_prestamo)
                print("prestamo devuelto")
            else:
                print("error en el estado del prestamo")
        else:
            print("error prestamo innexistente")

