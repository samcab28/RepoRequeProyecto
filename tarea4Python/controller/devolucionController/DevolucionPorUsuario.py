from modelo.PrestamoDevModel import PrestamoDev

class DevolucionUsuario:

    @staticmethod
    def devolucionUsuarioId(usuario_id):
        prestamoEncontrado = False
        for id_prestamo, prestamo in PrestamoDev.PrestamoDevAlmacenamiento.items():
            print(id_prestamo)
            if prestamo.estado_Prestamo == 0 and usuario_id == prestamo.id_Usuario:
                prestamoEncontrado = True
                print(f"ID: {id_prestamo},  Estado: devuelto, Usuario: {prestamo.id_Usuario}, Libro: {prestamo.id_Libro}, Fecha de inicio: {prestamo.fecha_Inicio}, Fecha de entrega: {prestamo.fecha_Entrega}")

        if(prestamoEncontrado == False):
            print("el usuario no tiene devoluciones asignadas")