"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const alumnos_1 = require("./model/alumnos");
const database_1 = require("./database/database");
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 3000;
//Función base que muestra todos los datos de la base de datos
const fun0 = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.db
        .conectarBD()
        .then((mensaje) => __awaiter(void 0, void 0, void 0, function* () {
        const query = yield alumnos_1.Alumnos.aggregate([
            {
                $lookup: {
                    from: 'matriculas',
                    localField: 'cod_matricula',
                    foreignField: 'cod',
                    as: 'matrics'
                }
            }
        ]);
        res.json(query);
    }))
        .catch(mensaje => {
        res.send(mensaje);
        console.log(mensaje);
    });
    database_1.db.desconectarBD();
});
//Muestra todos los datos de un alumno introduciendo su DNI. Ejemplo: "31342649C"
const fun1 = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const valor = req.params.dni;
    yield database_1.db
        .conectarBD()
        .then((mensaje) => __awaiter(void 0, void 0, void 0, function* () {
        const query = yield alumnos_1.Alumnos.aggregate([
            {
                $lookup: {
                    from: 'matriculas',
                    localField: 'cod_matricula',
                    foreignField: 'cod',
                    as: 'matrics'
                }
            },
            {
                $match: {
                    dni: valor
                }
            }
        ]);
        res.json(query);
    }))
        .catch(mensaje => {
        res.send(mensaje);
        console.log(mensaje);
    });
    database_1.db.desconectarBD();
});
//Muestra el nombre y fecha de entrada de los alumnos ingresados en el mes introducido
const fun2 = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const valor = parseInt(req.params.mes);
    yield database_1.db
        .conectarBD()
        .then((mensaje) => __awaiter(void 0, void 0, void 0, function* () {
        let arrayAlumnos;
        const query = yield alumnos_1.Alumnos.aggregate([
            {
                $lookup: {
                    from: 'matriculas',
                    localField: 'cod_matricula',
                    foreignField: 'cod',
                    as: 'matrics'
                }
            },
            {
                $project: {
                    _id: 0,
                    nombre: { $concat: ['$nombre', ' ', '$apellido'] },
                    mes_entrada: {
                        $month: { $arrayElemAt: ['$matrics.fecha_matriculacion', 0] }
                    }
                }
            }
        ]);
        console.log(query);
        arrayAlumnos = query;
        console.log(arrayAlumnos);
        let alumn;
        let alum;
        let mesEntrada = 0;
        let resultado = [];
        for (alumn of arrayAlumnos) {
            if (valor == alumn.mes_entrada) {
                resultado.push({
                    nombre: alumn.nombre,
                    mes_entrada: alumn.mes_entrada
                });
                console.log(alumn.nombre);
                console.log(alumn.mes_entrada);
            }
        }
        res.json(resultado);
    }))
        .catch(mensaje => {
        res.send(mensaje);
        console.log(mensaje);
    });
    database_1.db.desconectarBD();
});
//Muestra el nombre, nota media y asignaturas del alumno junto a si está aprobado o Suspenso en un campo aparte
const fun3 = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.db
        .conectarBD()
        .then((mensaje) => __awaiter(void 0, void 0, void 0, function* () {
        const query = yield alumnos_1.Alumnos.aggregate([
            {
                $lookup: {
                    from: 'matriculas',
                    localField: 'cod_matricula',
                    foreignField: 'cod',
                    as: 'matrics'
                }
            },
            {
                $set: {
                    notamedia: {
                        $avg: { $arrayElemAt: ['$matrics.detalles.nota', 0] }
                    }
                }
            },
            {
                $project: {
                    nombre: { $concat: ['$nombre', ' ', '$apellido'] },
                    notamedia: 1,
                    estado: {
                        $cond: [{ $gte: ['$notamedia', 5] }, 'Aprobado', 'Suspenso']
                    },
                    'matrics.detalles.asignatura': 1
                }
            }
        ]);
        res.json(query);
    }))
        .catch(mensaje => {
        res.send(mensaje);
        console.log(mensaje);
    });
    database_1.db.desconectarBD();
});
//Muestra la nota media de los alumnos de la localidad introducida
const fun4 = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const valor = req.params.ciudad;
    yield database_1.db
        .conectarBD()
        .then((mensaje) => __awaiter(void 0, void 0, void 0, function* () {
        let arrayAlumnos;
        const query = yield alumnos_1.Alumnos.aggregate([
            {
                $lookup: {
                    from: 'matriculas',
                    localField: 'cod_matricula',
                    foreignField: 'cod',
                    as: 'matrics'
                }
            },
            {
                $match: {
                    localidad: valor
                }
            },
            {
                $project: {
                    _id: 0,
                    notas: '$matrics.detalles.nota'
                }
            },
            {
                $unwind: { path: '$notas' }
            }
        ]);
        arrayAlumnos = query;
        let notaTotal = 0;
        let notaMedia = 0;
        let elemen;
        for (elemen of arrayAlumnos) {
            console.log(elemen.notas);
            for (var i = 0; i < elemen.notas.length; i++) {
                console.log(elemen.notas[i]);
                notaTotal += elemen.notas[i];
            }
            notaMedia = notaTotal / elemen.notas.length;
            notaMedia = notaMedia / arrayAlumnos.length;
            console.log(`Nota total: ${notaTotal}`);
        }
        res.json({ NotaMedia: notaMedia });
    }))
        .catch(mensaje => {
        res.send(mensaje);
        console.log(mensaje);
    });
    database_1.db.desconectarBD();
});
//Muestra la edad y mes de matriculacion de los alumnos
const fun5 = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.db
        .conectarBD()
        .then((mensaje) => __awaiter(void 0, void 0, void 0, function* () {
        let arrayAlumnos;
        const query = yield alumnos_1.Alumnos.aggregate([
            {
                $lookup: {
                    from: "matriculas",
                    localField: "cod_matricula",
                    foreignField: "cod",
                    as: "matrics"
                }
            },
            {
                $group: {
                    _id: {
                        edadAlumnos: "$fecha_nacimiento",
                        fechaMatriculacion: { $arrayElemAt: ["$matrics.fecha_matriculacion", 0] }
                    }
                }
            }
        ]);
        arrayAlumnos = query;
        console.log(arrayAlumnos);
        let elemen;
        let edadAlumno = 0;
        let resultado = [];
        for (elemen of arrayAlumnos) {
            const fechaEdad = elemen._id.edadAlumnos.getFullYear();
            const fechaMatricula = elemen._id.fechaMatriculacion.getMonth();
            console.log(fechaEdad, fechaMatricula);
            edadAlumno = 2021 - fechaEdad;
            console.log(edadAlumno);
            resultado.push({
                edadAlumno: edadAlumno,
                mes_entrada: fechaMatricula
            });
        }
        res.json(resultado);
    }))
        .catch(mensaje => {
        res.send(mensaje);
        console.log(mensaje);
    });
    database_1.db.desconectarBD();
});
app.get('/', fun0);
app.get('/alumnoDatos/:dni', fun1);
app.get('/alumnosMatriculadosMes/:mes', fun2);
app.get('/estadoAlumnos', fun3);
app.get('/mediaAlumnos/:ciudad', fun4);
app.get('/edadMasFechaAlumnos', fun5);
app.listen(process.env.port || port, () => {
    console.log(`Listening...`);
});
