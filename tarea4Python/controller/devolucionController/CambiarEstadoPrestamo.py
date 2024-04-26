from modelo.PrestamoDevModel import PrestamoDev

def cambiarEstadoPrestamo(Id_Prestamo):
    Id_Prestamo = int(Id_Prestamo)

    if Id_Prestamo in PrestamoDev.PrestamoDevAlmacenamiento:
        prestamo = PrestamoDev.PrestamoDevAlmacenamiento[Id_Prestamo]
        if prestamo.estado_Prestamo == 0:
            prestamo.estado_Prestamo = 1
            return prestamo
        elif prestamo.estado_Prestamo == 1:
            prestamo.estado_Prestamo = 0
            return prestamo
    print("Error: ese préstamo no existe")
