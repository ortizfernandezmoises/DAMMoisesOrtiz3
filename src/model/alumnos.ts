import {Schema, model } from 'mongoose'

const alumnoSchema = new Schema({
    dni: String,
    nombre: String,
    apellido: String,
    localidad: String,
    fecha_nacimiento: Date,
    telefono: Number,
    cod_matricula: Number,
    curso: Number
})

export interface Alumno {
    dni: string,
    nombre: string,
    apellido: string,
    localidad: string,
    fecha_nacimiento: Date,
    telefono: number,
    cod_matricula: number,
    curso: number
}

export const Alumnos = model('alumnos', alumnoSchema)