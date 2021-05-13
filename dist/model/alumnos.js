"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alumnos = void 0;
const mongoose_1 = require("mongoose");
const alumnoSchema = new mongoose_1.Schema({
    dni: String,
    nombre: String,
    apellido: String,
    localidad: String,
    fecha_nacimiento: Date,
    telefono: Number,
    cod_matricula: Number,
    curso: Number
});
exports.Alumnos = mongoose_1.model('alumnos', alumnoSchema);
