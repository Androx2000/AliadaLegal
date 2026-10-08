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
        'Nombre completo, fecha y lugar de nacimiento (estado/municipio), nombres de los padres, CURP si lo tiene; carta poder',
    },

    poderNotarial: {
      donde:
        'Notario público (estatal) o Cónsul mexicano en el país donde vive el cliente',
    },
  },

  Guatemala: {
    antecedentes: {
      tramite:
        '100% en línea, autoservicio (cape.oj.gob.gt) — el propio cliente lo hace desde EE.UU. con internet',
      poder:
        'NO necesita poder — es autoservicio en línea por el titular',
      requisitos:
        'CUI/DPI del titular; correo electrónico; acceso a internet para hacer el trámite él mismo',
    },

    nacimiento: {
      institucion: 'RENAP',
      poder: 'NO necesita poder notarial formal',
      requisitos:
        'Nombre completo, fecha y lugar de nacimiento, CUI/DPI si lo tiene, nombres de los padres; carta poder',
    },

    poderNotarial: {
      donde:
        'Notario público guatemalteco o Cónsul de Guatemala',
    },
  },

  Honduras: {
    antecedentes: {
      tramite:
        'Plataforma digital nacional: trámite en línea desde cualquier país; o mediante apoderado/familiar para pago y apostilla',
      poder:
        'NO es obligatorio — pero puede ayudar tener apoderado con carta poder autenticada para agilizar pago/apostilla',
      requisitos:
        'DNI vigente; correo electrónico; si usa apoderado, carta poder autenticada',
    },

    nacimiento: {
      institucion:
        'RNP (Registro Nacional de las Personas)',
      poder: 'NO necesita poder notarial formal',
      requisitos:
        'Nombre completo, fecha y lugar de nacimiento, tarjeta de identidad si la tiene; carta poder',
    },

    poderNotarial: {
      donde:
        'Notario público hondureño o Cónsul de Honduras',
    },
  },

  Colombia: {
    antecedentes: {
      tramite:
        'En línea mediante los servicios correspondientes de Policía Nacional / Cancillería.',
      poder:
        'Generalmente no requiere poder cuando el propio titular realiza la consulta en línea.',
      requisitos:
        'Número de cédula y datos requeridos por la plataforma correspondiente.',
    },

    nacimiento: {
      institucion:
        'Registraduría Nacional del Estado Civil',
      poder: 'NO necesita poder notarial formal',
      requisitos:
        'Nombre completo, número de cédula o registro previo, fecha y lugar de nacimiento; carta poder',
    },

    poderNotarial: {
      donde:
        'Notaría colombiana o Consulado de Colombia',
    },
  },

  Ecuador: {
    antecedentes: {
      tramite:
        'En línea ante la autoridad correspondiente; también puede utilizarse representación cuando el caso lo requiera.',
      poder:
        'NO necesariamente es obligatorio para el certificado; puede utilizarse un poder especial cuando se requiera representación.',
      requisitos:
        'Cédula del titular; si utiliza representación, documentación correspondiente del poder.',
    },

    nacimiento: {
      institucion:
        'Registro Civil, Identificación y Cedulación',
      poder: 'NO necesita poder notarial formal',
      requisitos:
        'Nombre completo, cédula, fecha y lugar de nacimiento; carta poder',
    },

    poderNotarial: {
      donde:
        'Notaría ecuatoriana o Consulado de Ecuador',
    },
  },

  Perú: {
    antecedentes: {
      tramite:
        'Puede requerir gestión consular o realizarse mediante una persona autorizada en Perú, dependiendo del procedimiento aplicable.',
      poder:
        'Puede utilizarse una carta poder cuando el procedimiento permita que un tercero realice la solicitud.',
      requisitos:
        'DNI o identificación vigente y documentación adicional requerida por la autoridad correspondiente.',
    },

    nacimiento: {
      institucion: 'RENIEC',
      poder: 'NO necesita poder notarial formal',
      requisitos:
        'Nombre completo, DNI, fecha y lugar de nacimiento; carta poder',
    },

    poderNotarial: {
      donde:
        'Notaría peruana o Consulado del Perú',
    },
  },

  Argentina: {
    antecedentes: {
      tramite:
        'Puede gestionarse mediante el Registro Nacional de Reincidencia o mediante una persona autorizada cuando corresponda.',
      poder:
        'Dependiendo del procedimiento, puede utilizarse una autorización validada por el consulado.',
      requisitos:
        'Documento de identidad o pasaporte y documentación de autorización cuando se utilice representante.',
    },

    nacimiento: {
      institucion:
        'Registro del Estado Civil correspondiente',
      poder: 'NO necesita poder notarial formal',
      requisitos:
        'Nombre completo, DNI, fecha y lugar de nacimiento, provincia; carta poder',
    },

    poderNotarial: {
      donde:
        'Escribanía o Consulado argentino',
    },
  },
}

export const generalDocumentsData = [
  {
    documento: 'Certificado de matrimonio',
    tramite:
      'Registro Civil correspondiente al país donde se encuentra inscrito el matrimonio.',
    poder:
      'Generalmente puede gestionarse mediante autorización o carta poder, dependiendo de la institución.',
    requisitos:
      'Identificación de ambos cónyuges; fecha y lugar del matrimonio; autorización cuando corresponda.',
  },

  {
    documento: 'Actas de nacimiento de hijos',
    tramite:
      'Registro Civil correspondiente al lugar de inscripción.',
    poder:
      'Generalmente no necesita poder notarial formal.',
    requisitos:
      'Datos completos del menor y de sus padres; identificación o información registral disponible.',
  },

  {
    documento: 'Certificado de soltería',
    tramite:
      'Registro Civil, municipalidad o institución equivalente del país correspondiente.',
    poder:
      'Generalmente no necesita poder notarial formal.',
    requisitos:
      'Identificación vigente y autorización cuando la institución la requiera.',
  },

  {
    documento: 'Sentencia / certificado de divorcio',
    tramite:
      'Juzgado o tribunal donde se tramitó el divorcio.',
    poder:
      'Puede requerir poder notarial debido a que corresponde a un expediente judicial.',
    requisitos:
      'Identificación; número de expediente o datos del divorcio; autorización o poder cuando corresponda.',
  },

  {
    documento: 'Historial académico apostillado',
    tramite:
      'Institución educativa correspondiente y posteriormente la autoridad encargada de la apostilla.',
    poder:
      'Depende de la política de la institución educativa.',
    requisitos:
      'Identificación; datos de la institución y años de estudio; autorización cuando sea requerida.',
  },

  {
    documento: 'Poder notarial (el documento en sí)',
    tramite:
      'Notario o Consulado del país correspondiente.',
    poder:
      'Es el poder mismo — el cliente lo otorga directamente.',
    requisitos:
      'Identificación vigente; datos completos del apoderado y descripción de los actos que se autorizan.',
  },

  {
    documento: 'Pasaporte (copia)',
    tramite:
      'No aplica — corresponde a una copia del documento que el cliente ya posee.',
    poder: 'No aplica',
    requisitos:
      'Copia legible y vigente del pasaporte.',
  },
]

export const countries = Object.keys(countryData)

export const documents = [
  'Antecedentes penales',
  'Partida de nacimiento',
  'Poder notarial',

  ...generalDocumentsData
    .filter(
      (item) =>
        item.documento !==
        'Poder notarial (el documento en sí)'
    )
    .map((item) => item.documento),
]