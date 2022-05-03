import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import './ItemDetailContainer.css';

function getItem(id) {
    const myPromise = new Promise((resolve, reject) => {
        const productsList = [
            {
                id: 1,
                imageUrl:
                  "https://http2.mlstatic.com/D_NQ_NP_2X_755743-MLA41523503764_042020-F.webp",
                title: "Auriculares gamer inalámbricos Astro A50 negro y gold",
                descripcion: "Alcance inalámbrico de 15 m. La batería dura 15 h. Modo manos libres incluido. Con micrófono incorporado. Sonido superior y sin límites.Cómodos y prácticos.",
                category: "Auriculares",
                price: "$34.653",
                stock: "25",
              },
              {
                id: 2,
                imageUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_903817-MLA47947792514_102021-F.webp",
                title: "Mouse de juego Logitech G Series Hero G502 kda",
                descripcion:"Utiliza cable. Posee rueda de desplazamiento. Cuenta con 11 botones para un mayor control. Con luces para mejorar la experiencia de uso.Con sensor óptico. Resolución de 25600dpi. Creado para llevar a todas partes. Control inteligente y navegación fácil.",
                category: "Ratones",
                price: "$6.999",
                stock: "252",
              },
              {
                id: 3,
              imageUrl:
              "https://http2.mlstatic.com/D_NQ_NP_2X_897779-MLA46504109530_062021-F.webp",
              title: "Teclado gamer Redragon Dragonborn K630 QWERTY Redragon Brown inglés US color blanco con luz RGB",
              descripcion: "Resiste a salpicaduras. Función antighosting incorporada. Tipo de teclado: mecánico. Tecla cilíndrica. Con conector USB-C.Con cable removible.Medidas: 29.17cm de ancho, 10.17cm de alto y 3.6cm de profundidad. Indispensable para tus actividades.Las imágenes pueden ser ilustrativas.",
              category: "Teclado",
              price: "$5.499",
              stock: "58",
              },
              {
                id: 4,
                imageUrl:
                  "https://http2.mlstatic.com/D_NQ_NP_2X_799581-MLA46503780892_062021-F.webp",
                title: "Teclado gamer HyperX Alloy Origins Core QWERTY Red inglés US color negro con luz RGB",
                descripcion: "Consolas compatibles: ps5, ps4, xbox series xis y xbox one. Ergonómico y apto para diversos usos. Función antighosting incorporada. Tipo de teclado: mecánico. Tecla cilíndrica.Con conector USB-C.Con cable removible. Medidas: 360mm de ancho, 132.5mm de alto y 34.5mm de profundidad. Indispensable para tus actividades.Las imágenes pueden ser ilustrativas.",
                category: "Teclado",
                price: "$11.799",
                stock: "73",
              },
              {
                id: 5,
                imageUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_784991-MLA48690719527_122021-F.webp",
                title: "Monitor gamer BenQ XL-K Series XL2546K LCD 24.5pulgadas; negro 100V/240V",
                descripcion: "Pantalla LCD de 24.5 pulgadas . Tiene una resolución de 1920px-1080px. Relación de aspecto de 16:9. Panel TN. Su brillo es de 320cd/m². Tipos de conexión: DisplayPort 1.2, 3 HDMI 2.0, Jack 3.5 mm.",
                category: "Monitores",
                price: "$109.999",
                stock: "89",
              },
              {
                id: 6,
                imageUrl:
                  "https://http2.mlstatic.com/D_NQ_NP_2X_859975-MLA48689271995_122021-F.webp",
                title: "Monitor gamer curvo Samsung Odyssey LC49G95TS Qled 49pulgadas; negro 100V/240V",
                descripcion: "Pantalla Qled de 49 pulgadas. Curvo. Tiene una resolución de 5120px-1440px. Relación de aspecto de 32:9. Panel VA. Su brillo es de 420cd/m². Tipos de conexión: HDMI 2.0, Jack 3.5 mm, 2 DisplayPort 1.4, 2 USB 3.0. Es giratorio y reclinable.",
                category: "Monitores",
                price: "300.970$",
                stock: "2",
              },
              {
                id: 7,
                imageUrl:
                  "https://http2.mlstatic.com/D_NQ_NP_2X_856496-MLA40733117105_022020-F.webp",
                title: "Mouse Pad gamer Logitech G440 Serie G de caucho y tela 280mm x 340mm x 3mm negro",
                descripcion: "Color: negro. Es antideslizante. Tiene 340mm de largo y su ancho es de 280mm. Su grosor es de 3mm. Precisión y comodidad en cada movimiento. Textura uniforme para máximo confort.",
                category: "MousePad",
                price: "$1.700",
                stock: "18",
              },
              {
                  id: 8,
                  imageUrl:
                    "https://http2.mlstatic.com/D_NQ_NP_2X_703156-MLA44385081441_122020-F.webp",
                  title: "Kit Microfono Condenser Mut Bm-800 Soporte Shock Youtuber",
                  descripcion: "Incluye Microfono condenser PRO-MIC BM-800, Brazo soporte tipo tijera, Shock Mount (araña), Filtro anti pop, Cubre microfono de goma espuma, Cable XLR a Miniplug",
                  category: "Microfonos",
                  price: "$5391",
                  stock: "14",
              },
              {
                id: 9,
                imageUrl:
                  "https://http2.mlstatic.com/D_NQ_NP_2X_917766-MLA43059544028_082020-F.webp",
                title: "Amazon Echo Dot 3rd Gen con asistente virtual Alexa charcoal 110V/240V",
                descripcion:"Con reconocimiento de voz. Función de control inteligente de dispositivos del hogar. Opción de sistema de audio multi-room. Conexión wifi y bluetooth. Recibe y realiza llamadas. Funciona en español y en inglés. Compatible con: Android 6.0, iOS 11.0, Fire OS 5.3.3.",
                category: "Parlantes",
                price: "$8.199",
                stock: "17",
              },
              {
                id: 10,
                imageUrl:
                  "https://http2.mlstatic.com/D_NQ_NP_2X_904570-MLA49170407523_022022-F.webp",
                title: "Cámara web Logitech C922 Full HD 60FPS color negro",
                descripcion: "Resolución máxima de video: 1920px x 1080px. Imagen con resolución de 3Mpx. Interfaz: USB-A 2.0. Funciona con Windows 7, Chrome OS, Android 5.0, macOS 10.10. Adecuada para pc de escritorio, notebook. Compatible con OBS, XSplit. Cuenta con varias funciones. Con zoom 1x. Incluye clip con montaje en trípode y trípode y manual de usuario y licencia premium de xsplit por 3 meses. Ideal para tus comunicaciones virtuales cotidianas.",
                category: "Camaras",
                price: "$11.880",
                stock: "50",
              },
            ];
        const item = productsList.filter(item => item.id === parseInt(id));
        setTimeout(() => {
            resolve(item[0]);
        }, 2000);
    });
    return myPromise;
}

function ItemDetailContainer() {
    const [item, setItem] = useState({});
    const { id } = useParams();

    useEffect(() => {
        getItem(id)
            .then(res => {
                setItem(res);
            })
            .catch(err => {
                console.log(err);
                alert('Ocurrio un error, revisar la consola!');
            });
    }, [id]);

    return (
        <div className='item-detail-container'>
            <ItemDetail item={item} />
        </div>
    )
}

export default ItemDetailContainer