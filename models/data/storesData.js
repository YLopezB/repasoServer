import 'dotenv/config.js'
import '../../config/database.js'
import Store from "../Store.js"

let stores = [
    {
        name: "TechStore Central",
        address: "Av. Siempre Viva 123",
        city: "Ciudad de M\u00e9xico",
        phone: 5551234567,
        email: "contacto@techstore.com",
        webSite: "https://www.techstore.com",
        active: true
    },
    {
        name: "ElectroShop Express",
        address: "Calle 45 #678",
        city: "Monterrey",
        phone: 8187654321,
        email: "ventas@electroshop.com",
        webSite: "https://www.electroshop.com",
        active: true
    },
    {
        name: "GadgetWorld",
        address: "Carrera 10 #55-30",
        city: "Bogot\u00e1",
        phone: 6019876543,
        email: "info@gadgetworld.com",
        webSite: "https://www.gadgetworld.com",
        active: false
    },
    {
        name: "SmartTech Plaza",
        address: "Rua das Inova\u00e7\u00f5es, 250",
        city: "S\u00e3o Paulo",
        phone: 11987654321,
        email: "soporte@smarttech.com",
        webSite: "https://www.smarttech.com",
        active: true
    },
    {
        name: "Innovatech Hub",
        address: "Boulevard Tecnol\u00f3gico 777",
        city: "Buenos Aires",
        phone: 1145678901,
        email: "contacto@innovatech.com",
        webSite: "https://www.innovatech.com",
        active: false
    }
]

Store.insertMany(stores);