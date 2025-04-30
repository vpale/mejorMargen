# Nombre del proyecto: Mejor margen

Bienvenidos a mi proyecto para lograr el certificado correspondiente al Bootcamp de Algoritmos y estructuras de datos.
En este repositorio se encuentra el programa que construí tomando como base la clase "Programación dinámica".

Uno de los algoritmos que se usan en esta técnica es el de la mochila (Knapsack Problem).
Trato de aplicar este algoritmo en un escenario de la vida real, que me presenta la siguiente duda.
¿Los súpermercados muestran la mercancía en los anaqueles de la forma que obtienen el mejor margen de ganacias o solo es un tema estético?
Construí este programa como un primer acercamiento a tratar de resolver esta duda.

La idea es, en un archivo (JSON) especificar con que artículos se quiere trabajar, de estos artículos, determinar cuales son los que más convienen poner en un mueble (anaquel), los artículos que mejor margen de ganancia dejen al súpermercado.

Lenguaje: JavaScript

Entorno de ejecución: NodeJS

Versión: 1.0

---

## 📚 Tabla de Contenido

- [Instalación](#instalación)
- [Autor](#autor)

---

## 💻 Instalación 
⚠️ Requisitos previos: Instalar NodeJS

Clona el repositorio.
El repositorio tiene la siguiente estructura:
- articulos.json
- mejorMargen.js

⚠️ **Advertencia:** Los archivos deben quedar en la misma carpeta (mismo nivel) para poderse ejecutar.

El archivo "articulos.json" tiene la siguiente estructura:
```json
{
    "peso": 10,
    "articulos":
    [
        {
            "nombre" : "A",
            "peso" : "2",
            "beneficio" : "3"
        },
        {
            "nombre" : "B",
            "peso" : "4",
            "beneficio" : "8"
        },
        {
            "nombre" : "C",
            "peso" : "5",
            "beneficio" : "1"
        }
    ]
}
```
Este archivo contiene la información con la cual va a trabajar el programa (mejorMargen.js).

Tenemos el atributo "peso" que es el que va a tomar el programa como tamaño máximo de nuestro mueble (anaquel).

Posteriormente, tenemos el arrglo "articulos", en donde se listan los diferentes artículos con su nombre, peso y beneficio (margen).

Ambos datos pueden cambiarse para ajustarse al escenario que se desea probar. Es posible poner un mayor o menor tamaño de mueble (anaquel). Y agregar o disminuir el número de artículos.

Ya que se establecieron los datos en el archivo "articulos.json" es posible ejecutar la aplicación desde línea de comandos con el comando: 

Ejecuta el comando `node mejorMargen.js` para iniciar la aplicación.

## 🔏 Autor
Alumno: Victor Carmona Pale.

