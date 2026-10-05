import {
    countryData,
    generalDocumentsData,
} from './request.data'

export function resolveRequirements(country, document) {
  if (!country || !document) {
    return null
  }

const countryInfo = countryData[country]

if (!countryInfo) {
    return null
}

if (document === 'Antecedentes penales') {
    return {
        tramite: countryInfo.antecedentes.tramite,
        poder: countryInfo.antecedentes.poder,
        requisitos: countryInfo.antecedentes.requisitos,
    }
}

if (document === 'Partida de nacimiento') {
    return {
        tramite: 'Institución: ${countryInfo.nacimiento.institucion}',
        poder: countryInfo.nacimiento.poder,
        requisitos: countryInfo.nacimiento.requisitos,
    }
}

if (document === 'Poder notarial') {
    return {
        tramite: 'Se otorga ante: ${countryInfo.poderNotarial.donde}',
        poder: 'Es el poder mismo - lo otorgas tú directamente',
        requisitos: 'Identificación vigente, datos del apoderado y descripción específica de los actos que autorizas',
   
    }
}

const generalDocument = generalDocumentsData.find((item) => item.document === document)

if (!generalDocument) {
    return null
}

return {
    tramite: generalDocument.tramite,
    poder: generalDocument.poder,
    requisitos: generalDocument.requisitos,
}
}