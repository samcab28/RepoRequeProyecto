from modelo.PrestamoDevModel import PrestamoDev

def consultarEstadoPrestamo(idPrestamo):
    for id_prestamo, prestamo in PrestamoDev.PrestamoDevAlmacenamiento.items():
        if id_prestamo == idPrestamo:
            return prestamo.estado_Prestamo
    print("Error: ese préstamo no existe o no se encontró su estado")
