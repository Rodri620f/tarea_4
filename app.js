let numero= 42;
console.log(numero);
let persona ={
    nombre: "pepito",
    edad: 151,
    estatura: 168
};
console.log(persona);
console.log(persona.nombre);
console.log(persona.edad);
console.log(["estatura"]);
persona.edad= 16;
console.log(persona.edad);
persona.estatura= 152;
console.log(persona.estatura);
persona["nombre"]= ["miguel"]


let propiedad_1 = "equipo";
persona[propiedad_1]= "Boca jr , bayern munich"
console.log(persona);

//arrays
let animales = ["mono", "gallina","loro", "lemur"]

animales[4]="conejo"
animales[10]="jichi"
console.log(animales);
console.log(animales[0]);
console.log(animales[1]);
console.log(animales[2]);
console.log(animales[3]);
console.log(animales[4]);
console.log(animales[10]);
