from modelo.PrestamoDevModel import PrestamoDev

class HistorialUsuario:

    @staticmethod
    def mostralHistorialUsuario(id_usuario):
        usuario_encontrado = False
        for prestamo_id, prestamo in PrestamoDev.PrestamoDevAlmacenamiento.items():
            if prestamo.id_Usuario == id_usuario:
                usuario_encontrado = True
                if prestamo.estado_Prestamo == 1:
                    print(
                        f"ID: {prestamo_id},  Estado: En préstamo, Usuario: {prestamo.id_Usuario}, Libro: {prestamo.id_Libro}, Fecha de inicio: {prestamo.fecha_Inicio}, Fecha de entrega: {prestamo.fecha_Entrega}")
                else:
                    print(
                        f"ID: {prestamo_id},  Estado: Devuelto, Usuario: {prestamo.id_Usuario}, Libro: {prestamo.id_Libro}, Fecha de inicio: {prestamo.fecha_Inicio}, Fecha de entrega: {prestamo.fecha_Entrega}")

        if not usuario_encontrado:
            print("Usuario no ha hecho movimientos")
