

// calback funcion que eejcuta una funcion

const empleados=[

{
    id: 1,
    nombre: "Juan",
    apellido: "Perez",
    edad: 25,
}, 
{
    id: 2,
    nombre: "Pedro",
    apellido: "Perez",
    edad: 25,
},
{
    id: 3,
    nombre: "Maria",
    apellido: "Perez",
    edad: 25,
}
];

const salarios= [
 {
    id: 1,

    salario: 1000,
 },
 {
    id: 2,
    salario: 2000,
 },{
    id: 3,
    salario: 3000,
 }
]

const getEmpleado=(id,callback) => {
    const empleado= empleados.find((empleado) => empleado.id===id);
    if(empleado){
    return empleado;
    }else{
        return `El empleado con id ${id} no existe`;
    }
}

console.log(getEmpleado(1),(empleado) => {console.log(empleado)});