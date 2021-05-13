import {Schema, model } from 'mongoose'

const matriculaSchema = new Schema({
cod: Number,
detalles: [{
asignatura: String,
nota: Number}],
fecha_matriculacion: Date
})

export interface Matricula {
cod: number,
detalles: [{
asignatura: string,
nota: number}],
fecha_matriculacion: Date
}


export const Matriculas = model('matriculas', matriculaSchema)