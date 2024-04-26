from modelo.PrestamoDevModel import PrestamoDev

class ConsultaDevolucion:

    @staticmethod
    def mostrarDevolucion():
        for id_prestamo, prestamo in PrestamoDev.PrestamoDevAlmacenamiento.items():
            if prestamo.estado_Prestamo == 0:
                print(f"ID: {id_prestamo},  Estado: Devuelto, Usuario: {prestamo.id_Usuario}, Libro: {prestamo.id_Libro}, Fecha de inicio: {prestamo.fecha_Inicio}, Fecha de entrega: {prestamo.fecha_Entrega}")
