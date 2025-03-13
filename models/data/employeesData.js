import 'dotenv/config.js'
import '../../config/database.js'
import Employee from "../Employee.js"

let employees = [
    { name: "Carlos Pérez", job: "Desarrollador Web", salary: 3500, gender: "Masculino", active: true },
    { name: "Andrea Gómez", job: "Diseñadora UX", salary: 4200, gender: "Femenino", active: true },
    { name: "Luis Martínez", job: "Analista de Datos", salary: 5000, gender: "Masculino", active: false },
    { name: "Sofía Herrera", job: "Gerente de Proyecto", salary: 6000, gender: "Femenino", active: true },
    { name: "Fernando Ríos", job: "Administrador de Redes", salary: 4800, gender: "Masculino", active: true },
    { name: "Valeria Núñez", job: "Ingeniera de Software", salary: 5300, gender: "Femenino", active: false },
    { name: "Jorge Castillo", job: "Soporte Técnico", salary: 3200, gender: "Masculino", active: true },
    { name: "Mariana López", job: "Especialista en Ciberseguridad", salary: 5500, gender: "Femenino", active: true },
    { name: "Ricardo Torres", job: "Tester QA", salary: 3700, gender: "Masculino", active: false },
    { name: "Natalia Espinoza", job: "Reclutadora IT", salary: 4000, gender: "Femenino", active: true },
    { name: "Daniel Ortiz", job: "Arquitecto de Software", salary: 7500, gender: "Masculino", active: true },
    { name: "Gabriela Méndez", job: "Marketing Digital", salary: 3800, gender: "Femenino", active: false },
    { name: "Hugo Fernández", job: "DevOps Engineer", salary: 6200, gender: "Masculino", active: true },
    { name: "Camila Vargas", job: "Consultora IT", salary: 5400, gender: "Femenino", active: false },
    { name: "Esteban Ramírez", job: "Scrum Master", salary: 5900, gender: "Masculino", active: true }
]

Employee.insertMany(employees);