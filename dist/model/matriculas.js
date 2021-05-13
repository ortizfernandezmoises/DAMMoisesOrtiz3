"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Matriculas = void 0;
const mongoose_1 = require("mongoose");
const matriculaSchema = new mongoose_1.Schema({
    cod: Number,
    detalles: [{
            asignatura: String,
            nota: Number
        }],
    fecha_matriculacion: Date
});
exports.Matriculas = mongoose_1.model('matriculas', matriculaSchema);
