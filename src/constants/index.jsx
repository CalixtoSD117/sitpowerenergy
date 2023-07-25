import { RiFacebookFill, RiInstagramLine, RiTwitterLine,

    RiMedalLine,
    RiTeamFill,
    RiUser2Fill,
    RiBaseStationLine,
    RiDatabaseLine,
    RiRobotLine,
    RiFlashlightLine,
    RiServerLine

} from "react-icons/ri";
import { ca2, ca3, ca4, ca5, ca6, datacenter, infrestructurati, proteccionelectrica, seguridadygestionti, solucionesderedes, solucionesenergia } from "../assets";


export const redessociales = [
    {
        id: 1,
        name: 'facebook',
        icon: <RiFacebookFill  className="text-xl" />,
        url: 'https://www.facebook.com/SitpeSoluciones/',
        hover: 'bg-blue-500 text-white hover:bg-blue-600 ', // Agregar la propiedad 'hover' con la clase de Tailwind CSS para el estado hover
    },
    {
        id: 2,
        name: 'instagram',
        icon: <RiInstagramLine className="text-xl" />,
        url: 'https://www.instagram.com/explore/locations/1503829379832565/sitpe-solutions/',
        hover: 'bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white hover:bg-gradient-to-r      hover:from-purple-600 hover:via-pink-600 hover:to-red-600', // Agregar la propiedad 'hover' con la clase de Tailwind CSS para el estado hover
    },
    {
        id: 3,
        name: 'twitter',
        icon: <RiTwitterLine className="text-xl" />,
        url: 'https://twitter.com/hashtag/soysitpe?src=hash',
        hover: 'bg-blue-400 text-white hover:bg-blue-500', // Agregar la propiedad 'hover' con la clase de Tailwind CSS para el estado hover
    }
]


export const links_quienes_somos =[
    {
        id: 1,
        name: 'Certificaciones',
        url: '/certificaciones',
        icon: <RiMedalLine className="text-yellow-500"/>,
    },
    {
        id: 2,
        name: 'Clientes',
        url: '/clientes',
        icon: <RiTeamFill className="text-gray-500"/>
    },
    {
        id: 3,
        name: 'Socios de Negocios',
        url: '/socio_negocios',
        icon: <RiUser2Fill className="text-blue-900"/>
    }
]

export const links_servicios =[
    {
        id: 1,
        name: 'Soluciones en Redes',
        url: '/soluciones_redes',
        icon: <RiBaseStationLine className="text-blue-900"/>,
        img: solucionesderedes
    },
    {
        id: 2,
        name: 'Data Center',
        url: '/data_center',
        icon: <RiDatabaseLine className="text-blue-900"/>,
        img: datacenter
    },
    {
        id: 3,
        name: 'Automatizacion y Gestion TI y IoT',
        url: '/automatizacion_gestion_ti',
        icon: <RiRobotLine className="text-gray-900"/>,
        img: seguridadygestionti
    },
    {
        id: 4,
        name: 'Soluciones de Energia',
        url: '/soluciones_energia',
        icon: <RiFlashlightLine className="text-yellow-400"/>,
        img: solucionesenergia
    },
    {
        id: 5,
        name: 'Infrestructuras TI',
        url: '/infraestructuras_ti',
        icon: <RiServerLine className="text-gray-900"/>,
        img: infrestructurati
    },
    {
        id: 6,
        name: 'Proteccion Electrica',
        url: '/proteccion_electrica',
        icon: <RiFlashlightLine className="text-yellow-400 ring-1 ring-blue-900 rounded-full"/>,
        img: proteccionelectrica
    }
]

export const carousel=[
    {
        id: 1,
        img: ca4,
        title: 'Somos Expertos en Redes Complejas',
        span: 'Tenemos una Solucion para todos sus proyectos y necesidades',
        comienze: '',
        conozca: ''
    },
    {
        id: 2,
        img: ca5,
        title: '',
        span: '',
        comienze: '',
        conozca: ''
    },
    {
        id: 3,
        img: ca6,
        title: '',
        span: '',
        comienze: '',
        conozca: ''
    },
    {
        id: 4,
        img: ca3,
        title: '',
        span: '',
        comienze: '',
        conozca: ''
    },
    {
        id: 5,
        img: ca2,
        title: '',
        span: '',
        comienze: '',
        conozca: ''
    },
]