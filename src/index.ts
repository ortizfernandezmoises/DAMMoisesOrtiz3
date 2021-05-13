import { Alumno, Alumnos } from './model/alumnos';
import { Matricula, Matriculas } from './model/matriculas';
import { MatAlumnosTot, AlumnosTot, AlumnosFecha } from './model/alumnostot';
import { db } from './database/database';
import { Request, Response } from 'express';
import express from 'express';
const app = express();
const port = 3000;

//Función base que muestra todos los datos de la base de datos

const fun0 = async (req: Request, res: Response) => {
	await db
		.conectarBD()
		.then(async mensaje => {
			const query = await Alumnos.aggregate([
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
		})
		.catch(mensaje => {
			res.send(mensaje);
			console.log(mensaje);
		});
	db.desconectarBD();
};

//Muestra todos los datos de un alumno introduciendo su DNI. Ejemplo: "31342649C"

const fun1 = async (req: Request, res: Response) => {
	const valor = req.params.dni
	await db
		.conectarBD()
		.then(async mensaje => {
			const query = await Alumnos.aggregate([
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
		})
		.catch(mensaje => {
			res.send(mensaje);
			console.log(mensaje);
		});
	db.desconectarBD();
};

//Muestra el nombre y fecha de entrada de los alumnos ingresados en el mes introducido

const fun2 = async (req: Request, res: Response) => {
	const valor: number = parseInt(req.params.mes)
	await db
		.conectarBD()
		.then(async mensaje => {
			let arrayAlumnos: Array<MatAlumnosTot>;
			const query = await Alumnos.aggregate([
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
      console.log(arrayAlumnos)
      let alumn: MatAlumnosTot;
			let alum: AlumnosTot;
			let mesEntrada: number = 0;
			interface respuesta {
				nombre: string;
				mes_entrada: number;
			}
			let resultado: Array<respuesta> = [];

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
		})
		.catch(mensaje => {
			res.send(mensaje);
			console.log(mensaje);
		});
	db.desconectarBD();
};

//Muestra el nombre, nota media y asignaturas del alumno junto a si está aprobado o Suspenso en un campo aparte

const fun3 = async (req: Request, res: Response) => {
	await db
		.conectarBD()
		.then(async mensaje => {
			const query = await Alumnos.aggregate([
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
		})
		.catch(mensaje => {
			res.send(mensaje);
			console.log(mensaje);
		});
	db.desconectarBD();
};

//Muestra la nota media de los alumnos de la localidad introducida

const fun4 = async (req: Request, res: Response) => {
	const valor = req.params.ciudad;
	await db
		.conectarBD()
		.then(async mensaje => {
			let arrayAlumnos: Array<MatAlumnosTot>;
			const query = await Alumnos.aggregate([
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
			let notaTotal: number = 0;
			let notaMedia: number = 0;
			let elemen: MatAlumnosTot;

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
		})
		.catch(mensaje => {
			res.send(mensaje);
			console.log(mensaje);
		});
	db.desconectarBD();
};
//Muestra la edad y mes de matriculacion de los alumnos

const fun5 = async (req: Request, res: Response) => {
	await db
		.conectarBD()
		.then(async mensaje => {
			let arrayAlumnos: Array<AlumnosFecha>;
			const query = await Alumnos.aggregate([
				{
        $lookup: {
            from: "matriculas",
            localField:"cod_matricula",
            foreignField: "cod",
            as: "matrics"
        }
    },
    {
      $group: {
        _id: {
        edadAlumnos: "$fecha_nacimiento",
        fechaMatriculacion: {$arrayElemAt: ["$matrics.fecha_matriculacion", 0]}    
    }
      }
    }
			]);

			arrayAlumnos = query;
      console.log(arrayAlumnos)
			let elemen: AlumnosFecha;
      let edadAlumno: number = 0 
      interface respuesta {
				edadAlumno: number;
				mes_entrada: number;
			}
			let resultado: Array<respuesta> = [];

			for (elemen of arrayAlumnos) {
        
        const fechaEdad = elemen._id.edadAlumnos.getFullYear();
        const fechaMatricula = elemen._id.fechaMatriculacion.getMonth();
				console.log(fechaEdad, fechaMatricula)
        edadAlumno = 2021-fechaEdad
        console.log(edadAlumno)
        resultado.push({
						edadAlumno: edadAlumno,
						mes_entrada: fechaMatricula
        })}
        res.json(resultado)
		})
		.catch(mensaje => {
			res.send(mensaje);
			console.log(mensaje);
		});
	db.desconectarBD();
};

app.get('/', fun0);
app.get('/alumnoDatos/:dni', fun1);
app.get('/alumnosMatriculadosMes/:mes', fun2);
app.get('/estadoAlumnos', fun3);
app.get('/mediaAlumnos/:ciudad', fun4);
app.get('/edadMasFechaAlumnos', fun5)

app.listen (process.env.port || port, () => {
	console.log(`Listening...`)
})
