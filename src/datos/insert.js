db.alumnos.insertMany([{
        dni: "62086125V",
        nombre: "Aurelio",
        apellido: "Guerrero",
        localidad: "Sevilla",
        fecha_nacimiento: ISODate("2004-05-24"),
        telefono: 139083901,
        cod_matricula: 1,
        curso: 3
    },
    {
        dni: "53036094A",
        nombre: "Noe",
        apellido: "Felipe",
        localidad: "Madrid",
        fecha_nacimiento: ISODate("2005-07-17"),
        telefono: 13904543501,
        cod_matricula: 2,
        curso: 4
    },
    {
        dni: "15608806V",
        nombre: "Blas",
        apellido: "Chavez",
        localidad: "Barcelona",
        fecha_nacimiento: ISODate("2004-09-12"),
        telefono: 23424234252,
        cod_matricula: 3,
        curso: 3
    },
    {
        dni: "10850064K",
        nombre: "Paulino",
        apellido: "Coca",
        localidad: "Valladolid",
        fecha_nacimiento: ISODate("2005-01-03"),
        telefono: 23525235329,
        cod_matricula: 4,
        curso: 4
    },
    {
        dni: "40419171Y",
        nombre: "Alberto",
        apellido: "Seoane",
        localidad: "Sevilla",
        fecha_nacimiento: ISODate("2004-02-01"),
        telefono: 4535353453,
        cod_matricula: 5,
        curso: 3
    },
    {
        dni: "83139453L",
        nombre: "David",
        apellido: "Sarmiento",
        localidad: "Badajoz",
        fecha_nacimiento: ISODate("2005-11-27"),
        telefono: 7745745746,
        cod_matricula: 6,
        curso: 4
    },
    {
        dni: "87759215R",
        nombre: "Julio",
        apellido: "Espino",
        localidad: "Madrid",
        fecha_nacimiento: ISODate("2005-12-19"),
        telefono: 456565464,
        cod_matricula: 7,
        curso: 4
    },
    {
        dni: "76756549Y",
        nombre: "German",
        apellido: "Baez",
        localidad: "Barcelona",
        fecha_nacimiento: ISODate("2004-06-23"),
        telefono: 76445664564,
        cod_matricula: 8,
        curso: 3
    },
    {
        dni: "20480870Z",
        nombre: "Sebastiana",
        apellido: "Barbero",
        localidad: "Valladolid",
        fecha_nacimiento: ISODate("2005-09-17"),
        telefono: 23423423423423,
        cod_matricula: 9,
        curso: 4
    },
    {
        dni: "62884050A",
        nombre: "Nahia",
        apellido: "Navas",
        localidad: "Sevilla",
        fecha_nacimiento: ISODate("2005-04-28"),
        telefono: 34535345345,
        cod_matricula: 10,
        curso: 4
    },
    {
        dni: "82051698A",
        nombre: "Emilia",
        apellido: "Tovar",
        localidad: "Merida",
        fecha_nacimiento: ISODate("2004-02-15"),
        telefono: 3456226634,
        cod_matricula: 11,
        curso: 4
         
    },
    {
        dni: "31342649C",
        nombre: "Eusebio",
        apellido: "Acosta",
        localidad: "Madrid",
        fecha_nacimiento: ISODate("2004-02-08"),
        telefono: 23432423423,
        cod_matricula: 12,
        curso: 3
         
    },
    {
        dni: "18357198R",
        nombre: "Maria Soledad",
        apellido: "Rodrigues",
        localidad: "Barcelona",
        fecha_nacimiento: ISODate("2004-11-10"),
        telefono: 2235325325,
        cod_matricula: 13,
        curso: 3
         
    },
    {
        dni: "92310673N",
        nombre: "Aroa",
        apellido: "Barreiro",
        localidad: "Leon",
        fecha_nacimiento: ISODate("2004-06-04"),
        telefono: 34534543534,
        cod_matricula: 14,
        curso: 4
    },
    {
        dni: "41477696W",
        nombre: "Gonzalo",
        apellido: "Nuñez",
        localidad: "Madrid",
        fecha_nacimiento: ISODate("2005-11-07"),
        telefono: 34535345345,
        cod_matricula: 15,
        curso: 3
        
    }
])

db.matriculas.insertMany([{
        cod: 1,
        detalles: [{
                asignatura: "Lengua",
                nota: 6
            },
            {
                asignatura: "Matematicas",
                nota: 3
            },
            {
                asignatura: "Historia",
                nota: 8
            },
            {
                asignatura: "TIC",
                nota: 5
            },
            {
                asignatura: "Dibujo",
                nota: 2
            }
        ],
        fecha_matriculacion: ISODate("2019-06-15")
    }, {
        cod: 2,
        detalles: [{
                asignatura: "Lengua",
                nota: 5
            },
            {
                asignatura: "Matematicas",
                nota: 2
            },
            {
                asignatura: "Historia",
                nota: 4
            },
            {
                asignatura: "TIC",
                nota: 1
            },
            {
                asignatura: "Dibujo",
                nota: 5
            }
        ],
        fecha_matriculacion: ISODate("2019-05-14")
    },
    {
        cod: 3,
        detalles: [{
                asignatura: "Lengua",
                nota: 9
            },
            {
                asignatura: "Matematicas",
                nota: 8
            },
            {
                asignatura: "Historia",
                nota: 9
            },
            {
                asignatura: "TIC",
                nota: 8
            },
            {
                asignatura: "Dibujo",
                nota: 9
            }
        ],
        fecha_matriculacion: ISODate("2019-05-28")
    },
    {
        cod: 4,
        detalles: [{
                asignatura: "Lengua",
                nota: 6
            },
            {
                asignatura: "Matematicas",
                nota: 5
            },
            {
                asignatura: "Historia",
                nota: 5
            }
        ],
        fecha_matriculacion: ISODate("2019-06-29")
    },
    {
        cod: 5,
        detalles: [{
                asignatura: "Lengua",
                nota: 8
            },
            {
                asignatura: "Matematicas",
                nota: 2
            },
            {
                asignatura: "Historia",
                nota: 7
            },
            {
                asignatura: "TIC",
                nota: 4
            },
            {
                asignatura: "Dibujo",
                nota: 5
            }
        ],
        fecha_matriculacion: ISODate("2019-07-23")
    },
    {
        cod: 6,
        detalles: [{
                asignatura: "Matematicas",
                nota: 8
            },
            {
                asignatura: "TIC",
                nota: 8
            }
        ],
        fecha_matriculacion: ISODate("2019-06-14")
    },
    {
        cod: 7,
        detalles: [{
                asignatura: "Lengua",
                nota: 3
            },
            {
                asignatura: "Matematicas",
                nota: 8
            },
            {
                asignatura: "Historia",
                nota: 5
            },
            {
                asignatura: "TIC",
                nota: 1
            },
            {
                asignatura: "Dibujo",
                nota: 8
            }
        ],
        fecha_matriculacion: ISODate("2019-05-10")
    },
    {
        cod: 8,
        detalles: [{
                asignatura: "Lengua",
                nota: 4
            },
            {
                asignatura: "Matematicas",
                nota: 6
            },
            {
                asignatura: "Historia",
                nota: 5
            },
            {
                asignatura: "TIC",
                nota: 9
            },
            {
                asignatura: "Dibujo",
                nota: 1
            }
        ],
        fecha_matriculacion: ISODate("2019-05-28")
    },
    {
        cod: 9,
        detalles: [{
                asignatura: "Lengua",
                nota: 5
            },
            {
                asignatura: "Matematicas",
                nota: 4
            },
            {
                asignatura: "Historia",
                nota: 8
            },
            {
                asignatura: "TIC",
                nota: 1
            },
            {
                asignatura: "Dibujo",
                nota: 7
            }
        ],
        fecha_matriculacion: ISODate("2019-06-19")
    },
    {
        cod: 10,
        detalles: [{
                asignatura: "Lengua",
                nota: 7
            },
            {
                asignatura: "Matematicas",
                nota: 8
            },
            {
                asignatura: "Historia",
                nota: 6
            },
            {
                asignatura: "TIC",
                nota: 9
            },
            {
                asignatura: "Dibujo",
                nota: 5
            }
        ],
        fecha_matriculacion: ISODate("2019-07-18")
    },
    {
        cod: 11,
        detalles: [{
                asignatura: "TIC",
                nota: 3
            },
            {
                asignatura: "Dibujo",
                nota: 2
            }
        ],
        fecha_matriculacion: ISODate("2019-05-23")
    },
    {
        cod: 12,
        detalles: [{
                asignatura: "Lengua",
                nota: 7
            },
            {
                asignatura: "Matematicas",
                nota: 5
            }
        ],
        fecha_matriculacion: ISODate("2019-06-22")
    },
    {
        cod: 13,
        detalles: [{
                asignatura: "Lengua",
                nota: 3
            },
            {
                asignatura: "Matematicas",
                nota: 3
            },
            {
                asignatura: "Historia",
                nota: 5
            },
            {
                asignatura: "TIC",
                nota: 5
            },
            {
                asignatura: "Dibujo",
                nota: 7
            }
        ],
        fecha_matriculacion: ISODate("2019-07-12")
    },
    {
        cod: 14,
        detalles: [{
                asignatura: "Lengua",
                nota: 6
            },
            {
                asignatura: "Matematicas",
                nota: 3
            },
            {
                asignatura: "Historia",
                nota: 8
            },
            {
                asignatura: "TIC",
                nota: 5
            }
        ],
        fecha_matriculacion: ISODate("2019-05-10")
    },
    {
        cod: 15,
        detalles: [{
                asignatura: "Lengua",
                nota: 9
            },
            {
                asignatura: "Matematicas",
                nota: 2
            },
            {
                asignatura: "Historia",
                nota: 6
            },
            {
                asignatura: "TIC",
                nota: 3
            },
            {
                asignatura: "Dibujo",
                nota: 5
            }
        ],
        fecha_matriculacion: ISODate("2019-06-09")
    }
])