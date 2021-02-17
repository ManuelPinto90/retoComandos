// ej 3
function impares(numero: number)
{
    for(let i=0; i<=numero; i++)
    {
        if(i % 2 != 0)
        {
            console.log(i)
        }
        else
        {
        }
    }
}
impares(7)
 // ej 4  
function revertido(array:string[]):string[]
{
    let revertir: string[] = [];
    for(let i= array.length - 1; i>=0; i--)
    {
        revertir.push(array[i])
    }
    return revertir
}
let miArray = ["Pepe", "Carlos", "Juan"]
console.log(revertido(miArray));
 // ej 5
 function arcoiris(array:string[])
 {
     for(let i=0; i<array.length; i++) 
     if(array[i] == "rojo")
     {
         console.log(array[i] + " es un color del arcoiris")
     }
     else if(array[i] == "naranja")
     {
         console.log(array[i] + " es un color del arcoiris")
     }
     else if(array[i] == "amarillo")
     {
         console.log(array[i] + " es un color del arcoiris")
     }
     else if(array[i] == "verde")
     {
         console.log(array[i] + " es un color del arcoiris")
     }
     else if(array[i] == "azul")
     {
         console.log(array[i] + " es un color del arcoiris")
     }
     else if(array[i] == "violeta")
     {
         console.log(array[i] + " es un color del arcoiris")
     }
     else 
     {
         console.log("no es un color del arcoiris")
     }
 }
 let colores= ["verde", "azul", "rojo","gris"]
 arcoiris(colores)
// ej 8
function sumaCaracteres(array:string[]):number
{
    let sumatorio = 0;
    for(let i = 0; i<array.length; i++){
        sumatorio += array[i].length; 
    }
    return sumatorio
}
nombres = ["Antonio","David"]
