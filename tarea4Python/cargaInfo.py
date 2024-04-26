from controller.usuarioController.usuarioCRUD.CrearUsuario import CrearUsuario
from controller.libroContoller.libroCRUD.CrearLibro import  CrearLibro
from controller.prestamoController.prestamoCRUD.CrearPrestamo import CrearPrestamo


def ejecutar():
    #crear usuario
    CrearUsuario.crearUsuario("Samir Cabrera")
    CrearUsuario.crearUsuario("Pamela Mortaya")
    CrearUsuario.crearUsuario("Josi Marin")
    CrearUsuario.crearUsuario("Luis Urbina")
    CrearUsuario.crearUsuario("Jamie Solano")
    CrearUsuario.crearUsuario("Keylor Morataya")
    CrearUsuario.crearUsuario("Ricardo Mortaya")
    CrearUsuario.crearUsuario("CUCO")
    CrearUsuario.crearUsuario("Lucas")
    CrearUsuario.crearUsuario("Patri")

    #crear libros
    CrearLibro.crearLibro("9788498383621", "Cien años de soledad", "Gabriel García Márquez")
    CrearLibro.crearLibro("9780307476463", "1984", "George Orwell")
    CrearLibro.crearLibro("9780061122415", "El amor en los tiempos del cólera", "Gabriel García Márquez")
    CrearLibro.crearLibro("9788408069102", "El código Da Vinci", "Dan Brown")
    CrearLibro.crearLibro("9788499893308", "La sombra del viento", "Carlos Ruiz Zafón")
    CrearLibro.crearLibro("9788408042020", "Harry Potter y la piedra filosofal", "J.K. Rowling")
    CrearLibro.crearLibro("9780307356549", "Orgullo y prejuicio", "Jane Austen")
    CrearLibro.crearLibro("9788420483890", "Don Quijote de la Mancha", "Miguel de Cervantes")
    CrearLibro.crearLibro("9788423338649", "Los Pilares de la Tierra", "Ken Follett")
    CrearLibro.crearLibro("9788497593029", "El alquimista", "Paulo Coelho")
