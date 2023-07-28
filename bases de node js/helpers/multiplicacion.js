// para exportar  archivo de node js 

const fs = require('fs');


const crearArchivo=(base=5)=>{
    let salida=""

for(let i=1; i<=10; i++){
    salida+=`
    ${base} * ${i} = ${base*i}
    `
}
console.log(salida)


// para crear archivos desde node js en este ejemplo se crea tabla del 5 text con fs.writeFile
fs.writeFile(`tabla-${base}.txt`, salida, (err)=>{  
    if(err) throw err;
    console.log("Archivo creado");

}); 

}

module.exports= {crearArchivo}; 

