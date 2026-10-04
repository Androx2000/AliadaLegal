import {
  ClipboardList,
  FileSearch,
  RefreshCw,
  PackageCheck,
} from 'lucide-react'

export const processSteps = [
  {
    id: 1,
    number: '01',
    title: 'Cuéntanos qué necesitas',
    description:
      'Selecciona el trámite que necesitas y comparte la información básica de tu caso.',
    icon: ClipboardList,
  },
  {
    id: 2,
    number: '02',
    title: 'Revisamos tu solicitud',
    description:
      'Validamos los requisitos y te indicamos qué documentos o información necesitamos.',
    icon: FileSearch,
  },
  {
    id: 3,
    number: '03',
    title: 'Gestionamos el trámite',
    description:
      'Nos encargamos del proceso y mantenemos actualizado el estado de tu solicitud.',
    icon: RefreshCw,
  },
  {
    id: 4,
    number: '04',
    title: 'Recibes tus documentos',
    description:
      'Cuando el trámite está completo, coordinamos la entrega o envío de tus documentos.',
    icon: PackageCheck,
  },
]