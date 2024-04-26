from controller.libroContoller.libroCRUD.CrearLibro import CrearLibro
from controller.libroContoller.libroCRUD.ConsutaLibro import ConsultaLibro
from controller.libroContoller import CambiarEstadoLibro

CrearLibro.crearLibro("12342","Minchurila y sus amigos","Pamela Morataya",1)
print(ConsultaLibro.mostrarLibros())
CambiarEstadoLibro.cambiarEstado(1)
print(ConsultaLibro.mostrarLibros())