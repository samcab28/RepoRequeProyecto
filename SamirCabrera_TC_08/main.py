from datetime import datetime, timedelta

#clase libro
class Libro:
    libros = {}

    @classmethod
    def crear_libro(cls, nombre, estado):
        id_libro = len(cls.libros) + 1
        libro = cls(id_libro, nombre, estado)
        cls.libros[id_libro] = libro
        return libro

    @classmethod
    def listar_libros(cls):
        for id_libro, libro in cls.libros.items():
            print(f"ID: {id_libro}, Nombre: {libro.nombre}, Estado: {libro.estado}")

    def __init__(self, id_libro, nombre, estado):
        self.id_libro = id_libro
        self.nombre = nombre
        self.estado = estado

#clase estudiante
class Estudiante:
    estudiantes = {}

    @classmethod
    def crear_estudiante(cls, nombre):
        id_estudiante = len(cls.estudiantes) + 1
        estudiante = cls(id_estudiante, nombre)
        cls.estudiantes[id_estudiante] = estudiante
        return estudiante

    @classmethod
    def listar_estudiantes(cls):
        for id_estudiante, estudiante in cls.estudiantes.items():
            print(f"ID: {id_estudiante}, Nombre: {estudiante.nombre}")

    def __init__(self, id_estudiante, nombre):
        self.id_estudiante = id_estudiante
        self.nombre = nombre

#clase prestamo
class Prestamo:
    prestamos = {}

    @classmethod
    def crear_prestamo(cls, id_libros, id_estudiante, id_admin, fecha_prestamo, dias_prestamo):
        id_prestamo = len(cls.prestamos) + 1
        prestamo = cls(id_prestamo, id_libros, id_estudiante, id_admin, fecha_prestamo, dias_prestamo)
        cls.prestamos[id_prestamo] = prestamo
        return prestamo

    @classmethod
    def listar_prestamos(cls):
        for id_prestamo, prestamo in cls.prestamos.items():
            print(prestamo)

    def __init__(self, id_prestamo, id_libros, id_estudiante, id_admin, fecha_prestamo, dias_prestamo):
        self.id_prestamo = id_prestamo
        self.id_libros = id_libros
        self.id_estudiante = id_estudiante
        self.id_admin = id_admin
        self.fecha_prestamo = fecha_prestamo
        self.dias_prestamo = dias_prestamo
        self.fecha_entrega = fecha_prestamo + timedelta(days=dias_prestamo)

    def __str__(self):
        return f"ID Prestamo: {self.id_prestamo}, Libros: {self.id_libros}, Estudiante: {self.id_estudiante}, ID Admin: {self.id_admin}, Fecha de Prestamo: {self.fecha_prestamo}, Dias de Prestamo: {self.dias_prestamo}, Fecha de Entrega: {self.fecha_entrega}"

#clase admin
class Administrador:
    administradores = {}

    @classmethod
    def crear_administrador(cls, nombre):
        id_admin = len(cls.administradores) + 1
        admin = cls(id_admin, nombre)
        cls.administradores[id_admin] = admin
        return admin

    @classmethod
    def listar_administradores(cls):
        for id_admin, admin in cls.administradores.items():
            print(f"ID: {id_admin}, Nombre: {admin.nombre}")

    def __init__(self, id_admin, nombre):
        self.id_admin = id_admin
        self.nombre = nombre

#clase biblioteca
class Biblioteca:
    def __init__(self):
        self.libros = Libro.libros
        self.estudiantes = Estudiante.estudiantes
        self.prestamos = Prestamo.prestamos
        self.administradores = Administrador.administradores

    def ejecutar(self):
        while True:
            print("\nMenu:")
            print("1. Crear nuevo libro")
            print("2. Crear nuevo estudiante")
            print("3. Crear nuevo administrador")
            print("4. Realizar préstamo")
            print("5. Listar libros")
            print("6. Listar estudiantes")
            print("7. Listar administradores")
            print("8. Listar préstamos")
            print("0. Salir")

            opcion = input("Ingrese una opción: ")

            if opcion == "1":
                nombre = input("Ingrese el nombre del libro: ")
                estado = input("Ingrese el estado del libro: ")
                Libro.crear_libro(nombre, estado)
            elif opcion == "2":
                nombre = input("Ingrese el nombre del estudiante: ")
                Estudiante.crear_estudiante(nombre)
            elif opcion == "3":
                nombre = input("Ingrese el nombre del administrador: ")
                Administrador.crear_administrador(nombre)
            elif opcion == "4":
                print("lista de libros:")
                Libro.listar_libros()
                id_libros = input("Ingrese los IDs de los libros a prestar separados por comas: ")
                print("lista de estudiantes:")
                Estudiante.listar_estudiantes()
                id_estudiante = input("Ingrese el ID del estudiante: ")
                print("lista de administradores:")
                Administrador.listar_administradores()
                id_admin = input("Ingrese el ID del administrador: ")
                fecha_prestamo = datetime.now()
                dias_prestamo = int(input("Ingrese la cantidad de días de préstamo: "))
                id_libros = [int(id) for id in id_libros.split(",")]
                id_estudiante = int(id_estudiante)
                id_admin = int(id_admin)
                Prestamo.crear_prestamo(id_libros, id_estudiante, id_admin, fecha_prestamo, dias_prestamo)
            elif opcion == "5":
                Libro.listar_libros()
            elif opcion == "6":
                Estudiante.listar_estudiantes()
            elif opcion == "7":
                Administrador.listar_administradores()
            elif opcion == "8":
                Prestamo.listar_prestamos()
            elif opcion == "0":
                break
            else:
                print("Opción no válida. Por favor, seleccione una opción válida.")

biblioteca = Biblioteca()
biblioteca.ejecutar()
