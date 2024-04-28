from modelo.PrestamoDevModel import PrestamoDev

class HistorialUsuario:

    @staticmethod
    def mostralHistorialUsuario(usuario_id):
        usuario_id = int(usuario_id)

        prestamoEncontrado = False
        devolucionEncontrada = True
        for id_prestamo, prestamo in PrestamoDev.PrestamoDevAlmacenamiento.items():

            if prestamo.estado_Prestamo == 1 and prestamo.id_Usuario == usuario_id:
                print(f"ID: {id_prestamo}, Estado: En préstamo, Usuario: {prestamo.id_Usuario}, Libro: {prestamo.id_Libro}, Fecha de inicio: {prestamo.fecha_Inicio}, Fecha de entrega: {prestamo.fecha_Entrega}")
                prestamoEncontrado = True

            if prestamo.estado_Prestamo == 0 and prestamo.id_Usuario == usuario_id:
                print(f"ID: {id_prestamo}, Estado: Devolución, Usuario: {prestamo.id_Usuario}, Libro: {prestamo.id_Libro}, Fecha de inicio: {prestamo.fecha_Inicio}, Fecha de entrega: {prestamo.fecha_Entrega}")
                devolucionEncontrada = True

        if not prestamoEncontrado:
            print("El usuario no tiene préstamos asignados")
        if not devolucionEncontrada:
            print("El usuario no tiene devoluciones realizadas")
