export interface MatAlumnosTot {
dni: string
nombre: string,
apellido: string,
localidad: string,
fecha_nacimiento: Date,
telefono: number,
cod_matricula: number,
curso: number,
matrics: [
{
_id: string,
cod: number,
detalles : [{
asignatura: string,
nota: number
}],
fecha_matriculacion : Date
}],
mes_entrada: number
notas: [number]
}

export interface AlumnosTot {
_id: string,
cod: number,
detalles : [{
asignatura: string,
nota: number
}],
fecha_matriculacion : Date
}

export interface AlumnosFecha {
_id: {
edadAlumnos: Date,
fechaMatriculacion: Date
} 
}