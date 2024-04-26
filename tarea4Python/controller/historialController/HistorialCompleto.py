from modelo.PrestamoDevModel import PrestamoDev


class ConsultaHistorial:

    @staticmethod
    def mostrarHistorial():
        for id_prestamo, prestamo in PrestamoDev.PrestamoDevAlmacenamiento.items():
            if prestamo.estado_Prestamo == 1:
                print(f"ID: {id_prestamo},  Estado: En préstamo, Usuario: {prestamo.id_Usuario}, Libro: {prestamo.id_Libro}, Fecha de inicio: {prestamo.fecha_Inicio}, Fecha de entrega: {prestamo.fecha_Entrega}")
            else:
                print(
                    f"ID: {id_prestamo},  Estado: Devuelto, Usuario: {prestamo.id_Usuario}, Libro: {prestamo.id_Libro}, Fecha de inicio: {prestamo.fecha_Inicio}, Fecha de entrega: {prestamo.fecha_Entrega}")
