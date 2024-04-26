from modelo.PrestamoDevModel import PrestamoDev

def consultarPrestamo(idPrestamo):
    for id_prestamo, prestamo in PrestamoDev.PrestamoDevAlmacenamiento.items():
        if id_prestamo == idPrestamo:
            return prestamo
    print("Error: ese préstamo no existe")
