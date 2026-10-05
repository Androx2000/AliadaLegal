export const countryData = {
  'El Salvador': {
    antecedentes: {
      tramite:
        'Solvencia PNC: presencial en consulado (huellas). Antecedentes de Centros Penales: sí se puede con poder.',
      poder:
        'Solvencia PNC: NO (exige presencia). Centros Penales: SÍ, poder notarial ante cónsul o notario.',
      requisitos:
        'DUI/pasaporte; para Centros Penales, poder notarial; para Solvencia PNC, cita en consulado + huellas',
    },

    nacimiento: {
      institucion: 'RNPN',
      poder:
        'NO necesita poder notarial formal — carta poder simple es suficiente',
      requisitos:
        'Nombre completo, fecha y lugar de nacimiento, DUI si lo tiene, nombres de los padres; carta poder simple',
    },

    poderNotarial: {
      donde:
        'Notario salvadoreño o Cónsul de El Salvador en el país donde vive el cliente',
    },
  },

  México: {
    antecedentes: {
      tramite:
        'Con carta poder (simple o notarial) + ficha de huellas tomada en consulado o agencia acreditada',
      poder:
        'SÍ, carta poder — más huellas del titular tomadas por separado',
      requisitos:
        'Copia de identificación; carta poder firmada; ficha de huellas tomada en consulado o agencia certificada',
    },

    nacimiento: {
      institucion: 'Registro Civil estatal',
      poder: 'NO necesita poder notarial formal',
      requisitos:
        'Nombre completo, fecha y lugar de nacimiento, nombres de los padres, CURP si lo tiene; carta poder',
    },

    poderNotarial: {
      donde:
        'Notario público o Cónsul mexicano en el país donde vive el cliente',
    },
  },
}

export const generalDocumentsData = [
  {
    documento: 'Certificado de matrimonio',
    tramite:
      'Registro Civil de cada país (misma institución que la partida de nacimiento)',
    poder: 'NO necesita poder notarial formal',
    requisitos:
      'Identificación de ambos cónyuges; fecha y lugar del matrimonio; carta poder simple',
  },
  {
    documento: 'Certificado de soltería',
    tramite: 'Registro Civil o municipalidad de cada país',
    poder: 'NO necesita poder notarial formal',
    requisitos: 'Identificación vigente; carta poder simple',
  },
  {
    documento: 'Sentencia / certificado de divorcio',
    tramite:
      'Juzgado o tribunal de familia donde se tramitó el divorcio',
    poder:
      'SÍ, generalmente poder notarial formal — es expediente judicial',
    requisitos:
      'Identificación; número de expediente o datos del divorcio; poder notarial',
  },
]

export const countries = Object.keys(countryData)

export const documents = [
  'Antecedentes penales',
  'Partida de nacimiento',
  'Poder notarial',
  ...generalDocumentsData.map((item) => item.documento),
]