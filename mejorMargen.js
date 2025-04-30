//Leo el archivo JSON que contiene los artículos a evaluar.
const datosArticulos = require('./articulos.json');

//Obtengo el tamaño máximo que puede contener el mueble(anaquel).
const peso = datosArticulos.peso;
//console.log(peso);
//Obtengo el número de artículos a evaluar.
const numeroArticulos = datosArticulos.articulos.length;
//console.log(numeroArticulos);

//Valido que sea un tipo y tamaño de mueble valido.
if(typeof peso !== 'number' && isNaN(peso)) {
  console.log('El peso debe ser de tipo numérico!!')
  return;
} else if(peso <= 0) {
  console.log('El peso debe ser mayor a cero!!')
  return;
}

//Creo el arreglo para guardar los resultados.
//Con esto evito volver a realizar calculos anteriores, para más adelante solo consultarlos.
//Creo arreglo de 2 dimensiones, una fila por cada artículo y una columna por cada posible tamaño del mueble.
let arregloDinamico = new Array(numeroArticulos);
for(let i = 0; i <= numeroArticulos; i++) {
  arregloDinamico[i] = new Array(peso + 1).fill(null);
}

//Inicializo primera columna y primera fila a ceros.
for(let p = 0; p <= peso; p++) {
  arregloDinamico[0][p] = 0;
}
for(let a = 0; a <= numeroArticulos; a++) {
  arregloDinamico[a][0] = 0;
}

//Algoritmo para guardar el beneficio de acuerdo al tamaño del mueble que se este evaluando por cada artículo.
for (let i = 1; i <= numeroArticulos; i++) {
  for (let p = 1; p <= peso; p++) {
    if(Number(datosArticulos.articulos[i-1].peso) <= p) {
      if(Number(datosArticulos.articulos[i-1].beneficio) + Number(arregloDinamico[i-0][p - datosArticulos.articulos[i-1].peso] > arregloDinamico[i-1][p])) {
        arregloDinamico[i][p] = Number(datosArticulos.articulos[i-1].beneficio) + Number(arregloDinamico[i-1][p - datosArticulos.articulos[i-1].peso]);
      } else {
        arregloDinamico[i][p] = Number(arregloDinamico[i-1][p])
      }
    } else {
      arregloDinamico[i][p] = Number(arregloDinamico[i-1][p])
    }
  }
}

//Muestro como quedo nuestro arreglo que posteriormente consultaremos para determinar cuales artículos tienen el mejor beneficio.
console.table(arregloDinamico);

//Creo el arreglo que guardara los artículos con mejor margen.
let mueble = [];
let i = Number(numeroArticulos);
let k = Number(peso);
//Algoritmo para determinar que artículos tienen el mejor margen de acuerdo al tamaño permitido del mueble.
while(arregloDinamico[i][k] > 0) {
  if(Number(arregloDinamico[i][k]) !== Number(arregloDinamico[i-1][k])) {
    mueble.push(i);
    i = i - 1;
    k = k - Number(datosArticulos.articulos[i].peso);
  } else {
    i = i -1;
  }
}

//Muestro resultados.
console.table(mueble);
console.log('Los artículos a considerar en el mueble con mejor margen de ganancia son:')
for(const articulo of mueble) {
    console.log(datosArticulos.articulos[articulo - 1].nombre);
}