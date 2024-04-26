class MenuPrestamo:
    def __init__(self):
        self.__init__

    def ejecutarMenuPrestamo(self):
        while True:
            print("\n\nBienvenido al Menu de Prestamo")
            print("1. Crear prestamo")
            print("2. Borrar prestamo")
            print("3. Consultar prestamo")
            print("4. Modificar prestamo")
            print("0. Regresar menu principal")

            try:
                opcion = int(input("digite una opcion: "))
            except ValueError:
                print("Error: Por favor, ingrese un número entero.")
                continue

            if opcion == 1:
                #llamada a crear
                print("Crear prestamo")
                #llama
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