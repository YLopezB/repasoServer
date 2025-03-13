import 'dotenv/config.js'
import '../../config/database.js'
import Product from "../Product.js"

let products = [
    {
        name: "Microsoft Surface Laptop 5",
        brand: "Intel",
        type: "C\u00e1mara",
        price: 2845.39,
        description: "El mejor rendimiento en su categor\u00eda.",
        image: "https://example.com/image0.jpg",
        inStock: true
    },
    {
        name: "NutriBullet Pro 900",
        brand: "Microsoft",
        type: "Monitor",
        price: 1563.82,
        description: "Compacto, ligero y poderoso.",
        image: "https://example.com/image1.jpg",
        inStock: true
    },
    {
        name: "Sony Alpha A7 IV",
        brand: "Microsoft",
        type: "Gaming",
        price: 1504.54,
        description: "El mejor rendimiento en su categor\u00eda.",
        image: "https://example.com/image2.jpg",
        inStock: false
    },
    {
        name: "GoPro Hero 11",
        brand: "Lenovo",
        type: "Tablet",
        price: 2302.95,
        description: "Dise\u00f1ado para la productividad y el entretenimiento.",
        image: "https://example.com/image3.jpg",
        inStock: true
    },
    {
        name: "Ring Video Doorbell 4",
        brand: "AMD",
        type: "Audio",
        price: 1125.67,
        description: "Compacto, ligero y poderoso.",
        image: "https://example.com/image4.jpg",
        inStock: false
    },
    {
        name: "Nikon Z50",
        brand: "Canon",
        type: "Monitor",
        price: 2463.84,
        description: "Experiencia envolvente con sonido de alta fidelidad.",
        image: "https://example.com/image5.jpg",
        inStock: true
    },
    {
        name: "Jabra Elite 7 Pro",
        brand: "LG",
        type: "C\u00e1mara",
        price: 1342.7,
        description: "Compatibilidad con m\u00faltiples dispositivos.",
        image: "https://example.com/image6.jpg",
        inStock: true
    },
    {
        name: "Acer Swift 3",
        brand: "HP",
        type: "Gaming",
        price: 167.41,
        description: "Dise\u00f1ado para la productividad y el entretenimiento.",
        image: "https://example.com/image7.jpg",
        inStock: false
    },
    {
        name: "Philips Hue Starter Kit",
        brand: "Corsair",
        type: "Componentes",
        price: 2003.28,
        description: "El mejor rendimiento en su categor\u00eda.",
        image: "https://example.com/image8.jpg",
        inStock: false
    },
    {
        name: "Rode NT1-A Condenser Mic",
        brand: "Razer",
        type: "C\u00e1mara",
        price: 716.18,
        description: "Dise\u00f1o ergon\u00f3mico para m\u00e1xima comodidad.",
        image: "https://example.com/image9.jpg",
        inStock: true
    },
    {
        name: "LG ThinQ Washer Dryer",
        brand: "Canon",
        type: "C\u00e1mara",
        price: 2962.02,
        description: "Compacto, ligero y poderoso.",
        image: "https://example.com/image10.jpg",
        inStock: false
    },
    {
        name: "Amazon Echo Dot 5th Gen",
        brand: "Bose",
        type: "Electrodom\u00e9stico",
        price: 737.7,
        description: "Con tecnolog\u00eda de \u00faltima generaci\u00f3n.",
        image: "https://example.com/image11.jpg",
        inStock: true
    },
    {
        name: "LG C2 OLED TV",
        brand: "JBL",
        type: "C\u00e1mara",
        price: 2759.46,
        description: "Experiencia envolvente con sonido de alta fidelidad.",
        image: "https://example.com/image12.jpg",
        inStock: true
    },
    {
        name: "Netgear Nighthawk AX12",
        brand: "Razer",
        type: "TV",
        price: 2415.35,
        description: "Con tecnolog\u00eda de \u00faltima generaci\u00f3n.",
        image: "https://example.com/image13.jpg",
        inStock: true
    },
    {
        name: "Brother HL-L2390DW",
        brand: "JBL",
        type: "Smartphone",
        price: 2247.09,
        description: "Bater\u00eda de larga duraci\u00f3n para todo el d\u00eda.",
        image: "https://example.com/image14.jpg",
        inStock: true
    },
    {
        name: "Beats Studio Buds",
        brand: "Razer",
        type: "Consola",
        price: 2121.02,
        description: "Dise\u00f1o ergon\u00f3mico para m\u00e1xima comodidad.",
        image: "https://example.com/image15.jpg",
        inStock: true
    },
    {
        name: "MSI GeForce RTX 4080",
        brand: "Intel",
        type: "Consola",
        price: 895.58,
        description: "Con tecnolog\u00eda de \u00faltima generaci\u00f3n.",
        image: "https://example.com/image16.jpg",
        inStock: false
    },
    {
        name: "Dell Ultrasharp U2723QE",
        brand: "DJI",
        type: "Audio",
        price: 950.96,
        description: "Durabilidad y rendimiento en un solo dispositivo.",
        image: "https://example.com/image17.jpg",
        inStock: false
    },
    {
        name: "Elgato Stream Deck",
        brand: "Asus",
        type: "Smartwatch",
        price: 1803.41,
        description: "Experiencia envolvente con sonido de alta fidelidad.",
        image: "https://example.com/image18.jpg",
        inStock: false
    },
    {
        name: "PlayStation 5",
        brand: "JBL",
        type: "Audio",
        price: 2489.34,
        description: "Bater\u00eda de larga duraci\u00f3n para todo el d\u00eda.",
        image: "https://example.com/image19.jpg",
        inStock: true
    },
    {
        name: "MSI MEG Z690 ACE",
        brand: "Canon",
        type: "Smartwatch",
        price: 457.59,
        description: "El mejor rendimiento en su categor\u00eda.",
        image: "https://example.com/image20.jpg",
        inStock: true
    },
    {
        name: "Samsung Family Hub Refrigerator",
        brand: "Corsair",
        type: "Gaming",
        price: 2276.56,
        description: "Compacto, ligero y poderoso.",
        image: "https://example.com/image21.jpg",
        inStock: true
    },
    {
        name: "SteelSeries Arctis Pro",
        brand: "DJI",
        type: "Audio",
        price: 2198.43,
        description: "Experiencia envolvente con sonido de alta fidelidad.",
        image: "https://example.com/image22.jpg",
        inStock: true
    },
    {
        name: "SteelSeries Arctis Pro",
        brand: "Intel",
        type: "Electrodom\u00e9stico",
        price: 151.39,
        description: "El mejor rendimiento en su categor\u00eda.",
        image: "https://example.com/image23.jpg",
        inStock: true
    },
    {
        name: "Asus ZenBook 14 OLED",
        brand: "JBL",
        type: "Smartphone",
        price: 1060.3,
        description: "Con tecnolog\u00eda de \u00faltima generaci\u00f3n.",
        image: "https://example.com/image24.jpg",
        inStock: false
    },
    {
        name: "Nikon Z50",
        brand: "Razer",
        type: "Auriculares",
        price: 1422.0,
        description: "Compatibilidad con m\u00faltiples dispositivos.",
        image: "https://example.com/image25.jpg",
        inStock: true
    },
    {
        name: "Laptop Dell XPS 15",
        brand: "GoPro",
        type: "C\u00e1mara",
        price: 576.21,
        description: "Experiencia envolvente con sonido de alta fidelidad.",
        image: "https://example.com/image26.jpg",
        inStock: true
    },
    {
        name: "TP-Link Archer AX73 Router",
        brand: "LG",
        type: "TV",
        price: 1442.14,
        description: "Dise\u00f1o ergon\u00f3mico para m\u00e1xima comodidad.",
        image: "https://example.com/image27.jpg",
        inStock: false
    },
    {
        name: "Microsoft Surface Laptop 5",
        brand: "Canon",
        type: "Componentes",
        price: 971.83,
        description: "Dise\u00f1ado para la productividad y el entretenimiento.",
        image: "https://example.com/image28.jpg",
        inStock: true
    },
    {
        name: "Acer Swift 3",
        brand: "Bose",
        type: "Audio",
        price: 511.24,
        description: "El mejor rendimiento en su categor\u00eda.",
        image: "https://example.com/image29.jpg",
        inStock: false
    },
    {
        name: "Samsung 55\" 4K Smart TV",
        brand: "Dell",
        type: "Smartwatch",
        price: 430.46,
        description: "Compacto, ligero y poderoso.",
        image: "https://example.com/image30.jpg",
        inStock: true
    },
    {
        name: "Nikon Z50",
        brand: "Razer",
        type: "Auriculares",
        price: 711.43,
        description: "Experiencia envolvente con sonido de alta fidelidad.",
        image: "https://example.com/image31.jpg",
        inStock: true
    },
    {
        name: "Rode NT1-A Condenser Mic",
        brand: "Lenovo",
        type: "Consola",
        price: 277.17,
        description: "Compacto, ligero y poderoso.",
        image: "https://example.com/image32.jpg",
        inStock: false
    },
    {
        name: "Gigabyte B660 AORUS PRO AX",
        brand: "AMD",
        type: "Auriculares",
        price: 1229.31,
        description: "Durabilidad y rendimiento en un solo dispositivo.",
        image: "https://example.com/image33.jpg",
        inStock: true
    },
    {
        name: "Netgear Nighthawk AX12",
        brand: "Asus",
        type: "Accesorios",
        price: 658.57,
        description: "Dise\u00f1ado para la productividad y el entretenimiento.",
        image: "https://example.com/image34.jpg",
        inStock: true
    },
    {
        name: "Google Nest Hub",
        brand: "Apple",
        type: "Consola",
        price: 2291.98,
        description: "Compatibilidad con m\u00faltiples dispositivos.",
        image: "https://example.com/image35.jpg",
        inStock: true
    },
    {
        name: "Shure SM7B Microphone",
        brand: "Apple",
        type: "Tablet",
        price: 1849.08,
        description: "Compatibilidad con m\u00faltiples dispositivos.",
        image: "https://example.com/image36.jpg",
        inStock: false
    },
    {
        name: "HyperX Cloud II",
        brand: "Nintendo",
        type: "Audio",
        price: 2835.61,
        description: "Dise\u00f1o ergon\u00f3mico para m\u00e1xima comodidad.",
        image: "https://example.com/image37.jpg",
        inStock: false
    },
    {
        name: "AKG K702",
        brand: "Samsung",
        type: "C\u00e1mara",
        price: 2669.43,
        description: "Durabilidad y rendimiento en un solo dispositivo.",
        image: "https://example.com/image38.jpg",
        inStock: true
    },
    {
        name: "iRobot Roomba i7+",
        brand: "Apple",
        type: "Monitor",
        price: 969.94,
        description: "Con tecnolog\u00eda de \u00faltima generaci\u00f3n.",
        image: "https://example.com/image39.jpg",
        inStock: true
    },
    {
        name: "Xiaomi Redmi Note 12",
        brand: "Apple",
        type: "Smartwatch",
        price: 582.42,
        description: "Pantalla de alta resoluci\u00f3n y colores vibrantes.",
        image: "https://example.com/image40.jpg",
        inStock: true
    },
    {
        name: "Samsung Family Hub Refrigerator",
        brand: "LG",
        type: "Tablet",
        price: 2221.48,
        description: "Dise\u00f1ado para la productividad y el entretenimiento.",
        image: "https://example.com/image41.jpg",
        inStock: false
    },
    {
        name: "Asus ROG Crosshair VIII Hero",
        brand: "Canon",
        type: "Tablet",
        price: 2792.63,
        description: "Bater\u00eda de larga duraci\u00f3n para todo el d\u00eda.",
        image: "https://example.com/image42.jpg",
        inStock: false
    },
    {
        name: "Sony WH-1000XM5",
        brand: "DJI",
        type: "Laptop",
        price: 513.14,
        description: "Durabilidad y rendimiento en un solo dispositivo.",
        image: "https://example.com/image43.jpg",
        inStock: false
    },
    {
        name: "Samsung 55\" 4K Smart TV",
        brand: "Dell",
        type: "Consola",
        price: 1129.3,
        description: "Pantalla de alta resoluci\u00f3n y colores vibrantes.",
        image: "https://example.com/image44.jpg",
        inStock: true
    },
    {
        name: "WD Black SN850X 2TB NVMe SSD",
        brand: "Canon",
        type: "Electrodom\u00e9stico",
        price: 2802.48,
        description: "Compacto, ligero y poderoso.",
        image: "https://example.com/image45.jpg",
        inStock: false
    },
    {
        name: "LG C2 OLED TV",
        brand: "JBL",
        type: "Componentes",
        price: 1900.31,
        description: "Compacto, ligero y poderoso.",
        image: "https://example.com/image46.jpg",
        inStock: false
    },
    {
        name: "Corsair iCUE H150i Elite Capellix",
        brand: "AMD",
        type: "Auriculares",
        price: 2097.43,
        description: "Experiencia envolvente con sonido de alta fidelidad.",
        image: "https://example.com/image47.jpg",
        inStock: false
    },
    {
        name: "Acer Swift 3",
        brand: "AMD",
        type: "Tablet",
        price: 695.64,
        description: "Dise\u00f1ado para la productividad y el entretenimiento.",
        image: "https://example.com/image48.jpg",
        inStock: false
    },
    {
        name: "Razer Blade 16",
        brand: "Corsair",
        type: "Accesorios",
        price: 2468.41,
        description: "Compatibilidad con m\u00faltiples dispositivos.",
        image: "https://example.com/image49.jpg",
        inStock: false
    },
    {
        name: "Asus ROG Crosshair VIII Hero",
        brand: "Bose",
        type: "Consola",
        price: 350.7,
        description: "Experiencia envolvente con sonido de alta fidelidad.",
        image: "https://example.com/image50.jpg",
        inStock: false
    },
    {
        name: "Acer Predator Helios 300",
        brand: "Dell",
        type: "Laptop",
        price: 103.43,
        description: "Compatibilidad con m\u00faltiples dispositivos.",
        image: "https://example.com/image51.jpg",
        inStock: true
    },
    {
        name: "Bose Smart Soundbar 900",
        brand: "Razer",
        type: "Monitor",
        price: 245.03,
        description: "Dise\u00f1o ergon\u00f3mico para m\u00e1xima comodidad.",
        image: "https://example.com/image52.jpg",
        inStock: false
    },
    {
        name: "LG UltraGear 27\" Monitor",
        brand: "Lenovo",
        type: "Smartphone",
        price: 939.01,
        description: "Experiencia envolvente con sonido de alta fidelidad.",
        image: "https://example.com/image53.jpg",
        inStock: true
    },
    {
        name: "Dell XPS 13 Plus",
        brand: "LG",
        type: "Accesorios",
        price: 2260.88,
        description: "Durabilidad y rendimiento en un solo dispositivo.",
        image: "https://example.com/image54.jpg",
        inStock: true
    },
    {
        name: "Motorola Edge 40",
        brand: "Dell",
        type: "C\u00e1mara",
        price: 2426.89,
        description: "Durabilidad y rendimiento en un solo dispositivo.",
        image: "https://example.com/image55.jpg",
        inStock: false
    },
    {
        name: "iPad Pro 12.9",
        brand: "Corsair",
        type: "Smartphone",
        price: 1654.98,
        description: "Pantalla de alta resoluci\u00f3n y colores vibrantes.",
        image: "https://example.com/image56.jpg",
        inStock: false
    },
    {
        name: "Breville Barista Express",
        brand: "Corsair",
        type: "Smartphone",
        price: 2144.31,
        description: "Durabilidad y rendimiento en un solo dispositivo.",
        image: "https://example.com/image57.jpg",
        inStock: true
    },
    {
        name: "Philips Hue Starter Kit",
        brand: "Apple",
        type: "Smartphone",
        price: 894.91,
        description: "Durabilidad y rendimiento en un solo dispositivo.",
        image: "https://example.com/image58.jpg",
        inStock: true
    },
    {
        name: "Gigabyte B660 AORUS PRO AX",
        brand: "JBL",
        type: "Laptop",
        price: 2748.65,
        description: "Dise\u00f1ado para la productividad y el entretenimiento.",
        image: "https://example.com/image59.jpg",
        inStock: true
    },
    {
        name: "Bose Smart Soundbar 900",
        brand: "Microsoft",
        type: "Auriculares",
        price: 2779.44,
        description: "Compatibilidad con m\u00faltiples dispositivos.",
        image: "https://example.com/image60.jpg",
        inStock: true
    },
    {
        name: "Shure SM7B Microphone",
        brand: "DJI",
        type: "Electrodom\u00e9stico",
        price: 857.59,
        description: "El mejor rendimiento en su categor\u00eda.",
        image: "https://example.com/image61.jpg",
        inStock: false
    },
    {
        name: "Seagate 5TB External HDD",
        brand: "Corsair",
        type: "Consola",
        price: 1024.44,
        description: "Compatibilidad con m\u00faltiples dispositivos.",
        image: "https://example.com/image62.jpg",
        inStock: false
    },
    {
        name: "Dyson V15 Detect",
        brand: "Microsoft",
        type: "Accesorios",
        price: 1100.57,
        description: "El mejor rendimiento en su categor\u00eda.",
        image: "https://example.com/image63.jpg",
        inStock: true
    },
    {
        name: "Seagate 5TB External HDD",
        brand: "Razer",
        type: "TV",
        price: 2485.11,
        description: "Dise\u00f1o ergon\u00f3mico para m\u00e1xima comodidad.",
        image: "https://example.com/image64.jpg",
        inStock: false
    },
    {
        name: "Logitech MX Master 3S",
        brand: "Apple",
        type: "Smartphone",
        price: 975.19,
        description: "Con tecnolog\u00eda de \u00faltima generaci\u00f3n.",
        image: "https://example.com/image65.jpg",
        inStock: true
    },
    {
        name: "Alienware m15 R7",
        brand: "Apple",
        type: "Consola",
        price: 1160.22,
        description: "Pantalla de alta resoluci\u00f3n y colores vibrantes.",
        image: "https://example.com/image66.jpg",
        inStock: false
    },
    {
        name: "Google Nest Hub",
        brand: "Samsung",
        type: "Componentes",
        price: 500.24,
        description: "Bater\u00eda de larga duraci\u00f3n para todo el d\u00eda.",
        image: "https://example.com/image67.jpg",
        inStock: true
    },
    {
        name: "Dell XPS 13 Plus",
        brand: "Nintendo",
        type: "Componentes",
        price: 2494.45,
        description: "Experiencia envolvente con sonido de alta fidelidad.",
        image: "https://example.com/image68.jpg",
        inStock: false
    },
    {
        name: "Breville Barista Express",
        brand: "Bose",
        type: "Electrodom\u00e9stico",
        price: 2716.82,
        description: "Bater\u00eda de larga duraci\u00f3n para todo el d\u00eda.",
        image: "https://example.com/image69.jpg",
        inStock: true
    },
    {
        name: "Amazon Echo Dot 5th Gen",
        brand: "Corsair",
        type: "Gaming",
        price: 2074.7,
        description: "Compatibilidad con m\u00faltiples dispositivos.",
        image: "https://example.com/image70.jpg",
        inStock: true
    },
    {
        name: "LG ThinQ Washer Dryer",
        brand: "Dell",
        type: "Monitor",
        price: 2633.61,
        description: "Dise\u00f1ado para la productividad y el entretenimiento.",
        image: "https://example.com/image71.jpg",
        inStock: false
    },
    {
        name: "Google Pixel 7",
        brand: "LG",
        type: "Consola",
        price: 2399.72,
        description: "El mejor rendimiento en su categor\u00eda.",
        image: "https://example.com/image72.jpg",
        inStock: false
    },
    {
        name: "Sennheiser HD 560S",
        brand: "Razer",
        type: "Componentes",
        price: 63.76,
        description: "Bater\u00eda de larga duraci\u00f3n para todo el d\u00eda.",
        image: "https://example.com/image73.jpg",
        inStock: true
    },
    {
        name: "Shure SM7B Microphone",
        brand: "Bose",
        type: "Componentes",
        price: 2228.45,
        description: "Experiencia envolvente con sonido de alta fidelidad.",
        image: "https://example.com/image74.jpg",
        inStock: false
    },
    {
        name: "Nespresso Vertuo Plus",
        brand: "Intel",
        type: "Smartwatch",
        price: 1549.82,
        description: "Dise\u00f1o ergon\u00f3mico para m\u00e1xima comodidad.",
        image: "https://example.com/image75.jpg",
        inStock: true
    },
    {
        name: "TCL 6-Series Roku TV",
        brand: "Asus",
        type: "TV",
        price: 2663.47,
        description: "Durabilidad y rendimiento en un solo dispositivo.",
        image: "https://example.com/image76.jpg",
        inStock: true
    },
    {
        name: "Sennheiser HD 560S",
        brand: "Razer",
        type: "Tablet",
        price: 2396.54,
        description: "Pantalla de alta resoluci\u00f3n y colores vibrantes.",
        image: "https://example.com/image77.jpg",
        inStock: false
    },
    {
        name: "Samsung T7 SSD 1TB",
        brand: "Apple",
        type: "Componentes",
        price: 1617.23,
        description: "Bater\u00eda de larga duraci\u00f3n para todo el d\u00eda.",
        image: "https://example.com/image78.jpg",
        inStock: true
    },
    {
        name: "KitchenAid Artisan Stand Mixer",
        brand: "HP",
        type: "Gaming",
        price: 1145.33,
        description: "Durabilidad y rendimiento en un solo dispositivo.",
        image: "https://example.com/image79.jpg",
        inStock: false
    },
    {
        name: "Acer Swift 3",
        brand: "AMD",
        type: "Tablet",
        price: 729.33,
        description: "Dise\u00f1o ergon\u00f3mico para m\u00e1xima comodidad.",
        image: "https://example.com/image80.jpg",
        inStock: true
    },
    {
        name: "Acer Swift 3",
        brand: "GoPro",
        type: "Tablet",
        price: 953.6,
        description: "Compacto, ligero y poderoso.",
        image: "https://example.com/image81.jpg",
        inStock: false
    },
    {
        name: "HyperX Cloud II",
        brand: "AMD",
        type: "Accesorios",
        price: 1942.47,
        description: "Dise\u00f1o ergon\u00f3mico para m\u00e1xima comodidad.",
        image: "https://example.com/image82.jpg",
        inStock: false
    },
    {
        name: "Canon EOS R6",
        brand: "GoPro",
        type: "Componentes",
        price: 271.48,
        description: "Compatibilidad con m\u00faltiples dispositivos.",
        image: "https://example.com/image83.jpg",
        inStock: true
    },
    {
        name: "Nintendo Switch OLED",
        brand: "Samsung",
        type: "Accesorios",
        price: 579.38,
        description: "Con tecnolog\u00eda de \u00faltima generaci\u00f3n.",
        image: "https://example.com/image84.jpg",
        inStock: false
    },
    {
        name: "Instant Pot Duo 7-in-1",
        brand: "Bose",
        type: "Componentes",
        price: 1786.74,
        description: "Durabilidad y rendimiento en un solo dispositivo.",
        image: "https://example.com/image85.jpg",
        inStock: true
    },
    {
        name: "Instant Pot Duo 7-in-1",
        brand: "Razer",
        type: "TV",
        price: 2290.65,
        description: "Durabilidad y rendimiento en un solo dispositivo.",
        image: "https://example.com/image86.jpg",
        inStock: false
    },
    {
        name: "Corsair K95 RGB Platinum",
        brand: "Razer",
        type: "Auriculares",
        price: 706.32,
        description: "Compatibilidad con m\u00faltiples dispositivos.",
        image: "https://example.com/image87.jpg",
        inStock: false
    },
    {
        name: "NutriBullet Pro 900",
        brand: "Lenovo",
        type: "Tablet",
        price: 188.87,
        description: "Dise\u00f1o ergon\u00f3mico para m\u00e1xima comodidad.",
        image: "https://example.com/image88.jpg",
        inStock: true
    },
    {
        name: "Canon EOS R6",
        brand: "GoPro",
        type: "Monitor",
        price: 156.88,
        description: "El mejor rendimiento en su categor\u00eda.",
        image: "https://example.com/image89.jpg",
        inStock: true
    },
    {
        name: "Acer Swift 3",
        brand: "Canon",
        type: "Smartphone",
        price: 1710.69,
        description: "Con tecnolog\u00eda de \u00faltima generaci\u00f3n.",
        image: "https://example.com/image90.jpg",
        inStock: true
    },
    {
        name: "NutriBullet Pro 900",
        brand: "Canon",
        type: "Audio",
        price: 1871.55,
        description: "Pantalla de alta resoluci\u00f3n y colores vibrantes.",
        image: "https://example.com/image91.jpg",
        inStock: true
    },
    {
        name: "Dell Ultrasharp U2723QE",
        brand: "Nintendo",
        type: "Laptop",
        price: 1558.84,
        description: "Compatibilidad con m\u00faltiples dispositivos.",
        image: "https://example.com/image92.jpg",
        inStock: true
    },
    {
        name: "Samsung Family Hub Refrigerator",
        brand: "Razer",
        type: "Audio",
        price: 2403.77,
        description: "El mejor rendimiento en su categor\u00eda.",
        image: "https://example.com/image93.jpg",
        inStock: true
    },
    {
        name: "Sony Alpha A7 IV",
        brand: "GoPro",
        type: "Auriculares",
        price: 2055.66,
        description: "Durabilidad y rendimiento en un solo dispositivo.",
        image: "https://example.com/image94.jpg",
        inStock: true
    },
    {
        name: "Yamaha RX-V6A Receiver",
        brand: "Microsoft",
        type: "Electrodom\u00e9stico",
        price: 1613.21,
        description: "Pantalla de alta resoluci\u00f3n y colores vibrantes.",
        image: "https://example.com/image95.jpg",
        inStock: false
    },
    {
        name: "Philips Hue Starter Kit",
        brand: "Sony",
        type: "C\u00e1mara",
        price: 1039.03,
        description: "Experiencia envolvente con sonido de alta fidelidad.",
        image: "https://example.com/image96.jpg",
        inStock: true
    },
    {
        name: "iRobot Roomba i7+",
        brand: "Samsung",
        type: "Smartphone",
        price: 1117.83,
        description: "Compatibilidad con m\u00faltiples dispositivos.",
        image: "https://example.com/image97.jpg",
        inStock: true
    },
    {
        name: "Corsair K95 RGB Platinum",
        brand: "HP",
        type: "Componentes",
        price: 1753.88,
        description: "Pantalla de alta resoluci\u00f3n y colores vibrantes.",
        image: "https://example.com/image98.jpg",
        inStock: false
    },
    {
        name: "G.Skill Trident Z5 RGB 32GB RAM",
        brand: "LG",
        type: "Accesorios",
        price: 1140.58,
        description: "Compatibilidad con m\u00faltiples dispositivos.",
        image: "https://example.com/image99.jpg",
        inStock: true
    }
]

Product.insertMany(products);