class MenuUsuario:
    def __init__(self):
        self.__init__

    def ejecutarMenuUsuario(self):
        while True:
            print("\n\nBienvenido al Menu de Usuario")
            print("1. Crear Usuario")
            print("2. Borrar Usuario")
            print("3. Consultar Usuario")
            print("4. Modificar Usuario")
            print("0. Regresar menu principal")

            try:
                opcion = int(input("digite una opcion: "))
            except ValueError:
                print("Error: Por favor, ingrese un número entero.")
                continue

            if opcion == 1:
                #llamada a crear
                continue
            elif opcion == 2:
                # llamada a borrar
                continue
            elif opcion == 3:
                #llamada a consultar
                continue
            elif opcion == 4:
                #llamada a modificar
                continue

            elif opcion == 0:
                break
            else:
                print("Error a la hora de digitar un digito: ")
                continue