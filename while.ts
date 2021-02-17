
// ej 6
function par(array:number[]):boolean
{
    let i:number=0
    let interruptor:boolean = true
    while(i<array.length && interruptor == true)
    {
        if(array[i] % 2 == 0)
        {
            i++
        }
        else
        {
            interruptor = false
        }
    }return interruptor
}
let prueba = [3,2]
console.log(par(prueba))
// ej 7
function mNombres(array:string[]):boolean
{
    let i:number=0
    let interruptor:boolean = true
    while(i<array.length && interruptor == true)
    {
        if(array[i][0] == "m")
        {
            i++
        }
        else 
        {
            interruptor = false
        }
    } return interruptor
}
let nombres = ["Manuel","Ana","Concha"]
console.log(mNombres(nombres))
// ej 10
let ej1 = ["casa", "coche", "ciudad", "cesta"]
let ej2 = ["barco","baca","bicicleta", "balon", "bisiesto", "brasil"]
let ej3 = ["venezuela", "veneno", "voltaje"]
console.log(sumaCaracteres(ej1))
console.log(sumaCaracteres(ej2))
console.log(sumaCaracteres(ej3))
parImpar(sumaCaracteres(ej1))
parImpar(sumaCaracteres(ej2))
parImpar(sumaCaracteres(ej3))