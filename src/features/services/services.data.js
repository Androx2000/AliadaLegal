import {

    FileCheck2,
    FileText,
    Languages,
    Scale,
    ScrollText,
    Truck,
} from 'lucide-react';

export const services = [
    {

        id: 'antecedentes',
        title: 'Antecedentes',
        description: 'Gestionamos certificados de antecedentes y los pasos adicionales necesarios para utilizarlos internacionalmente.',
        icon: FileCheck2,
        featured: true,
    },
    {

        id: 'partidas',
        title: 'Partidas',
        description:       'Solicitamos partidas de nacimiento y otros documentos emitidos por registros civiles.',
        icon: FileText,
        featured: false,
    },
    {
        id: 'apostillas',
        title: 'Apostillas',
        description:       'Coordinamos la apostilla de documentos para que puedan surtir efectos en el extranjero.',
        icon: ScrollText,
        featured: false,
    },

    {
        id: 'traducciones',
        title: 'Traducciones',
        description:       'Coordinamos traducciones de documentos cuando el trámite internacional lo requiere.',
        icon: Languages,
        featured: false,
    },

    {
        id: 'poderes',
        title: 'Poderes',
        description:     'Te orientamos y coordinamos poderes para realizar gestiones legales en tu país de origen.',
        icon: Scale,
        featured: false,

    },

    {
        id: 'mensajeria',
        title: 'Envio de documentos',
        description:    'Coordinamos el envío de tus documentos terminados hasta el destino acordado.',
        icon: Truck,
        featured: false,

    }
]