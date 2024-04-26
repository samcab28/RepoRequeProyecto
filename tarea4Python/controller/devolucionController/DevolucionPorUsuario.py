from modelo.PrestamoDevModel import PrestamoDev

class DevolucionUsuario:

    @staticmethod
    def devolucionUsuarioId(usuario_id):
        usuario_id = int(usuario_id)

        devolucionEncontrada = False
        for id_prestamo, prestamo in PrestamoDev.PrestamoDevAlmacenamiento.items():
            if prestamo.estado_Prestamo == 0 and prestamo.id_Usuario == usuario_id:
                print(f"ID: {id_prestamo}, Estado: Devolución, Usuario: {prestamo.id_Usuario}, Libro: {prestamo.id_Libro}, Fecha de inicio: {prestamo.fecha_Inicio}, Fecha de entrega: {prestamo.fecha_Entrega}")
                devolucionEncontrada = True

        if not devolucionEncontrada:
            print("El usuario no tiene devoluciones registradas")
