import type {
  CaseStudy,
  NavItem,
  SocialLink,
  Skill,
  HeroContent,
  AboutContent,
  Testimonial,
} from '@/types'

export const hero: HeroContent = {
  badge: 'Disponible para nuevos proyectos',
  headline: 'Diseño los sistemas que hacen que los productos escalen',
  subtitle: 'Estrategia, DesignOps e IA generativa para equipos que escalan.',
  tagline: '7+ años en banca · 24 personas lideradas · CoE fundado desde cero',
  ctaPrimary: 'Ver mi trabajo',
  ctaSecondary: 'Contacto',
}

export const caseStudies: CaseStudy[] = [
  {
    id: '01',
    slug: 'coe-diseno-estrategico',
    title: 'Construir el CoE de Diseño desde cero',
    subtitle: 'Cómo le di estructura a la función de diseño en Coppel',
    description:
      'Creé e implementé el primer Centro de Excelencia de Diseño Estratégico de Coppel — integrando Producto, UX y DesignOps bajo un modelo de gobernanza con OKRs, playbooks y estándares unificados.',
    company: 'Coppel',
    role: 'Strategic Design Lead',
    duration: '2 años',
    year: '2024–2026',
    tags: ['DesignOps', 'Estrategia', 'Liderazgo', 'IA'],
    metrics: [
      { label: 'Equipos liderados', value: '5+', trend: 'up' },
      { label: 'Colaboradores', value: '24', trend: 'up' },
      { label: 'Ciclo diseño→dev', value: '−45%', trend: 'down' },
    ],
    coverColor: '#0d1520',
    accentColor: '#378ADD',
    featured: true,
    problem:
      'Cuando llegué a Coppel no existía un modelo formal que conectara las áreas de Producto, UX y DesignOps. Cada célula operaba con sus propios criterios, sin un lenguaje común ni métricas compartidas. La escala del problema era considerable: más de 5 equipos distribuidos en diferentes ciudades.',
    challenge:
      'Construir una estructura organizacional nueva dentro de una empresa Fortune 500, con múltiples equipos, liderazgos y culturas de trabajo distintas — y hacerlo de forma que fuera adoptada orgánicamente, no impuesta.',
    solution:
      'Creé el Centro de Excelencia de Diseño Estratégico: modelo de gobernanza con OKRs, KPIs y playbooks. Pirámide estratégica que conecta visión de negocio con ejecución. Sistema de Atomic Research para decisiones basadas en datos. Metodología de historial clínico del producto. Auditorías UCD basadas en ISO 9241-210. Onboarding por rol y seniority. Todo construido en 90% con IA generativa.',
    results: [
      'Primer CoE de Diseño Estratégico en la historia de Coppel',
      'Modelo de gobernanza activo en 5+ equipos en Monterrey y Guadalajara',
      'Estandarización del proceso de diseño a nivel organizacional',
      'Reducción de pérdida de conocimiento ante rotación de talento',
      'Framework metodológico unificado socializado en todos los equipos',
    ],
  },
  {
    id: '02',
    slug: 'ai-product-builder',
    title: 'De cero a producto en producción con IA',
    subtitle: 'Construyendo productos reales con IA generativa como segunda capa de pensamiento',
    description:
      'Diseñé y desarrollé un producto digital completo con IA: agente conversacional en WhatsApp, CRM automatizado con detección de churn y generación automática de contenido para redes sociales.',
    company: 'Proyecto propio',
    role: 'Founder / Builder',
    duration: 'En curso',
    year: '2024',
    tags: ['IA aplicada', 'Cursor', 'n8n', 'Claude'],
    metrics: [
      { label: 'Productos lanzados', value: '3+', trend: 'up' },
      { label: 'Tiempo de prototipado', value: '−70%', trend: 'down' },
      { label: 'Flujos automatizados', value: '12+', trend: 'up' },
    ],
    coverColor: '#0d1520',
    accentColor: '#378ADD',
    featured: true,
    problem:
      'Un negocio de servicios operaba completamente de forma manual: agenda por WhatsApp, sin seguimiento de clientes, sin visibilidad de quién estaba en riesgo de no regresar. El dueño del negocio perdía tiempo y clientes por falta de automatización.',
    challenge:
      'Construir un producto digital completo y funcional sin equipo de desarrollo, usando IA generativa como segunda capa de pensamiento — desde la definición del problema hasta el deploy en producción.',
    solution:
      'Diseñé y desarrollé tres sistemas integrados: agente conversacional en WhatsApp y Facebook que responde consultas y agenda citas de forma autónoma. CRM automatizado que segmenta clientes por frecuencia, detecta churn y ejecuta estrategias de retención con mensajes personalizados. Sistema de generación automática de contenido para redes sociales. Stack: Claude, Cursor, Supabase, GitHub, Vercel, n8n.',
    results: [
      'Agente conversacional activo en WhatsApp y Facebook',
      'CRM con segmentación automática y detección de churn funcionando',
      'Generación automática de contenido para redes sociales',
      'Tiempo de desarrollo: semanas, no meses',
      'Primer producto propio en producción construido íntegramente con IA',
    ],
  },
  {
    id: '03',
    slug: 'nomina-banorte',
    title: 'De cero a célula estratégica',
    subtitle: 'Cómo fundé la primera unidad de producto para Nómina en Banorte',
    description:
      'Fundé y operé la primera célula estratégica de producto Nómina en Banorte — desde el diseño organizacional hasta la ejecución, definiendo NSM, OKRs, KPIs y alineación con alta dirección.',
    company: 'Banorte',
    role: 'Product Specialist',
    duration: '3 años',
    year: '2021–2024',
    tags: ['Producto', 'OKRs', 'Estrategia', 'B2B'],
    metrics: [
      { label: 'Usuarios activos', value: '2M+', trend: 'up' },
      { label: 'NPS del producto', value: '+28 pts', trend: 'up' },
      { label: 'Reducción de fricción', value: '−35%', trend: 'down' },
    ],
    coverColor: '#0d1520',
    accentColor: '#378ADD',
    featured: true,
    problem:
      'El producto Nómina en Banorte atendía segmentos PyME y Empresarial sin una unidad de producto dedicada. Las decisiones se tomaban de forma reactiva, sin norte claro ni métricas que conectaran las iniciativas con los objetivos del negocio.',
    challenge:
      'Crear la estructura estratégica donde no existía — dentro de una institución financiera grande donde los procesos de cambio son lentos y los stakeholders tienen agendas diversas.',
    solution:
      'Fundé y operé la primera célula estratégica: diseño organizacional completo con roles y responsabilidades. Macro Journey Map de Nómina end-to-end que identificó oportunidades en toda la cadena de valor. Pirámide estratégica con NSM, OKRs y KPIs alineados con alta dirección. Backlog estratégico priorizado por impacto. Ciclo de mejora continua basado en NPS.',
    results: [
      'Primera célula estratégica de producto Nómina en Banorte',
      'North Star Metric y OKRs definidos y alineados con alta dirección',
      'Macro Journey Map que originó 4 pilares estratégicos del roadmap',
      'NPS de portales empresariales incrementado de 72 a 75',
      'Ciclo de mejora continua basado en datos activo durante toda la operación',
    ],
  },
  {
    id: '04',
    slug: 'bancoppel-incentivos',
    title: 'De Excel a tiempo real: app de incentivos BanCoppel',
    subtitle: 'App móvil B2E que eliminó el registro manual y devolvió la motivación a los asesores',
    description:
      'Los asesores de BanCoppel registraban colocaciones manualmente sin visibilidad de metas ni incentivos. Diseñé una app móvil que digitalizó el proceso de principio a fin.',
    company: 'BanCoppel',
    role: 'Lead Product Specialist',
    duration: '5 meses',
    year: '2025–2026',
    tags: ['Mobile App', 'Employee Experience', 'B2E', 'Product Design'],
    metrics: [
      { label: 'Plataforma', value: 'Mobile', trend: 'neutral' },
      { label: 'Usuarios', value: 'B2E', trend: 'neutral' },
      { label: 'Duración', value: '5 meses', trend: 'neutral' },
    ],
    coverColor: '#0d1520',
    accentColor: '#378ADD',
    featured: false,
    problem:
      'Los asesores de BanCoppel registraban sus colocaciones diarias de forma manual, sin visibilidad clara sobre sus metas ni sobre cuánto habían ganado en incentivos. El resultado: errores, pérdida de información crítica y motivación que se deterioraba con cada quincena de incertidumbre.',
    challenge:
      'Convencer al negocio de que una herramienta de visibilidad directa sobre incentivos podía ser una palanca de motivación — y diseñarla para colaboradores que no necesariamente eran usuarios tech-savvy.',
    solution:
      'App móvil con tres funciones centrales: registro diario de colocaciones con flujo simplificado, dashboard de metas mensuales con visualización de avance vs meta, e incentivo en tiempo real mostrando cuánto ha generado el colaborador y cuánto puede generar al 100%.',
    results: [
      'Eliminación del registro manual de colocaciones diarias',
      'Reducción de pérdida de información crítica entre registro y cálculo de incentivo',
      'Visibilidad en tiempo real de incentivos para cada colaborador',
      'Mejora percibida en visibilidad de metas',
    ],
  },
  {
    id: '05',
    slug: 'bancoppel-empresarial',
    title: 'Rediseño con norte claro: Banca Empresarial BanCoppel',
    subtitle: 'Integré una capa estratégica completa a un rediseño que avanzaba sin métricas ni visibilidad',
    description:
      'El rediseño de Banca Empresarial avanzaba sin métrica norte, sin OKRs y sin visibilidad de impacto. Entré a construir esa capa estratégica desde adentro.',
    company: 'BanCoppel',
    role: 'Lead Product Specialist',
    duration: '6 meses',
    year: '2025',
    tags: ['Behavioral Design', 'Product Strategy', 'OKRs', 'UX Leadership'],
    metrics: [
      { label: 'Equipos', value: 'Cross-functional', trend: 'neutral' },
      { label: 'NPS', value: '72 → 75', trend: 'up' },
      { label: 'Impacto', value: 'Estratégico', trend: 'up' },
    ],
    coverColor: '#0d1520',
    accentColor: '#378ADD',
    featured: false,
    problem:
      'El rediseño avanzaba por intuición visual sin métricas que justificaran las decisiones. No existían journeys estratégicos ni modelo de gobernanza que alineara a UX, Producto, MKT y Tecnología.',
    challenge:
      'Entrar a un proyecto en marcha y proponer una reconversión estratégica sin detener la ejecución — con credibilidad ante equipos y directivos que no habían solicitado ese cambio.',
    solution:
      'Estructuré el proyecto en 4 capas: Product Strategy con NSM, OKRs, KPIs y Business Goals. UX Strategy con mapeo de hallazgos y Product Vision Board. UX Operation con auditoría, prototipado de flujos críticos y Value Stream Map. Experiencia con activos faltantes: plantillas, notificaciones y roadmap.',
    results: [
      'Primera vez que Banca Empresarial operó con North Star Metric y OKRs documentados',
      'Value Stream Map completo con trazabilidad de todas las iniciativas',
      'Ecosistema de experiencia construido desde cero',
      'Equipos cross-functional alineados bajo gobernanza unificada',
      'NPS empresarial incrementado de 72 a 75',
    ],
  },
  {
    id: '06',
    slug: 'banorte-tarjeta-favorita',
    title: 'De portal invisible a experiencia medible: Mi Tarjeta Favorita',
    subtitle: 'Lideré el rediseño completo sin Product Owner ni equipo de CX',
    description:
      'Mi Tarjeta Favorita era un portal de Banorte que pocos conocían y presentaba errores críticos. Sin Product Owner ni equipo de CX, tomé el liderazgo transversal del proyecto.',
    company: 'Banorte',
    role: 'CX/UX Design Lead',
    duration: '1 año',
    year: '2019–2020',
    tags: ['User Centered Design', 'Web Portal', 'UX Research', 'Product Leadership'],
    metrics: [
      { label: 'Usuarios', value: 'Tarjetahabientes', trend: 'neutral' },
      { label: 'Plataforma', value: 'Web Portal', trend: 'neutral' },
      { label: 'Impacto', value: 'Operacional', trend: 'up' },
    ],
    coverColor: '#0d1520',
    accentColor: '#378ADD',
    featured: false,
    problem:
      'Los usuarios desconocían la existencia del portal y no activaban sus promociones. El portal tenía fallas funcionales documentadas sin estructura para atenderlas. No existían métricas de comportamiento ni de satisfacción.',
    challenge:
      'Transformar una iniciativa correctiva en un proyecto estratégico de rediseño centrado en el usuario — sin los roles formales de producto que normalmente lo sostienen.',
    solution:
      'Rediseño UCD completo con investigación con usuarios tarjetahabientes, arquitectura de información, backlog y flujos end-to-end. Implementación de Glassbox para monitoreo de comportamiento digital. Incorporación de NPS como métrica de satisfacción por primera vez en el portal.',
    results: [
      'Rediseño completo basado en investigación con usuarios reales',
      'Reducción de fricciones en el flujo de activación de promociones',
      'Primera implementación de Glassbox en el portal',
      'NPS activado como métrica de satisfacción continua',
      'Mejora en comprensión de beneficios por parte de los tarjetahabientes',
    ],
  },
]

export const navItems: NavItem[] = [
  { label: 'Proyectos', href: '/proyectos' },
  { label: 'Sobre mí', href: '/sobre' },
  { label: 'Metodologías', href: '/metodologias' },
  { label: 'Contacto', href: '/contacto' },
]

export const socialLinks: SocialLink[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/pablo-nava-heras/' },
]

export const about: AboutContent = {
  sectionLabel: 'Sobre mí',
  heading: 'El diseño estratégico es un sistema, no una entrega.',
  bio: [
    'Strategic Design Lead con 7+ años en banca mexicana. Fundo equipos, defino estrategia y construyo productos con IA.',
  ],
  principles: [
    {
      title: 'El sistema primero',
      description: 'No diseño features aislados — diseño sistemas que se sostienen solos.',
    },
    {
      title: 'Claridad sobre complejidad',
      description: 'Si no lo puedo explicar en una slide, no lo entendí todavía.',
    },
    {
      title: 'IA como amplificador',
      description: 'No como atajo, sino como segunda capa de pensamiento en cada etapa.',
    },
  ],
  education: [
    {
      degree: 'Licenciatura en Diseño Digital',
      institution: 'Universidad del Valle de México',
      year: '2020–2024',
      type: 'degree',
    },
    {
      degree: 'Maestría en Innovación para el Desarrollo Empresarial',
      institution: 'Tec de Monterrey',
      year: '2025, En curso',
      type: 'degree',
    },
    {
      degree: 'Ingeniería en Sistemas Computacionales',
      institution: 'Universidad Internacional de La Rioja',
      year: '2025, En curso',
      type: 'degree',
    },
    {
      degree: 'Bootcamp AI First Product Manager',
      institution: 'ProductHUB',
      year: '2026, En curso',
      type: 'certification',
    },
    {
      degree: 'CX Advanced Customer Experience IA',
      institution: 'CX Latam Institute',
      year: '2026',
      type: 'certification',
    },
    {
      degree: 'Claude Code para PMs',
      institution: 'ProductHUB',
      year: '2026',
      type: 'certification',
    },
    {
      degree: 'Bootcamp Product Design: estrategia',
      institution: 'Interfaz de Producto',
      year: '2024–2025',
      type: 'course',
    },
    {
      degree: 'Diplomado Diseño centrado en el usuario',
      institution: 'UNAM',
      year: '2023–2024',
      type: 'course',
    },
    {
      degree: 'Especialización Customer Journey Mapping',
      institution: 'IZO',
      year: '2023',
      type: 'certification',
    },
    {
      degree: 'Bootcamp Digital Product Design & Service Design',
      institution: 'Colectivo 23 | IDEO',
      year: '2023',
      type: 'course',
    },
  ],
}

export const skills: Skill[] = [
  {
    category: 'Estrategia y Diseño',
    items: ['Strategic Design', 'DesignOps', 'Product Design', 'UX Research', 'Journey Mapping'],
  },
  {
    category: 'IA y Automatización',
    items: ['Prompt Engineering', 'Cursor', 'n8n', 'RAG', 'Agentes de IA'],
  },
  {
    category: 'Frontend y Prototipado',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer'],
  },
]

export const testimonials: Testimonial[] = [
  {
    id: '01',
    name: 'Paola Araceli Paniagua Osorio',
    role: 'UX Researcher Lead',
    company: 'CoE Coppel',
    text: 'Tengo la oportunidad de colaborar con Pablo y ha sido de mucho valor su enfoque en el diseño de producto, siempre impulsando al equipo para tener una visión más estratégica que nos ayuda a conectar las soluciones de diseño con los objetivos estratégicos del negocio.',
  },
  {
    id: '02',
    name: 'Rosario Guerrero',
    role: 'Product Designer',
    company: 'Coppel',
    text: 'Es una persona responsable, con un profundo conocimiento en servicios digitales y estrategias de negocio. Pablo no solo tiene un gran talento para liderar, también demuestra una gran pasión por crear y trabajar en equipo. Es un líder ejemplar y un compañero invaluable.',
  },
  {
    id: '03',
    name: 'Jocelin Garcini',
    role: 'Diseñadora UX/UI',
    company: 'Coppel',
    text: 'Lo primero a destacar de Pablo es su capacidad de análisis, él conoce de procesos, de buenas prácticas y de estrategia. Es un buen líder porque fomenta la buena relación con stakeholders y permite la participación de los miembros de su equipo.',
  },
  {
    id: '04',
    name: 'Rakel Robertha Velázquez Hernández',
    role: 'Gerente de Transformación y Mejora Continua',
    company: 'Grupo Financiero Banorte',
    text: 'Pablo ha demostrado su gran capacidad de análisis, comprensión de las necesidades del negocio y amplio conocimiento en el diseño de experiencias de clientes y usuarios, brindando ideas y propuestas innovadoras.',
  },
  {
    id: '05',
    name: 'Dulce Acosta',
    role: 'Subdirectora UI Banca Digital',
    company: 'Banorte',
    text: 'Excelente conocimiento en el diseño de experiencia a usuarios. Buena gestión de diversos proyectos. Gran manejo de las herramientas de trabajo, investigación y testing.',
  },
  {
    id: '06',
    name: 'Rodolfo Hernández Ojesto',
    role: 'Estratega de CX Canales físicos y digitales',
    company: 'Banco Azteca',
    text: 'Pablo es, sin duda, un valor en el equipo. Además de responsable y dedicado, posee una gran capacidad de análisis y sus aportaciones siempre son bienvenidas porque nos ha demostrado que, al final, fue una pieza clave.',
  },
  {
    id: '07',
    name: 'Isaí Morales',
    role: 'Director Mercadotecnia / Experto en CX / UX',
    company: 'Banorte',
    text: 'Pablo ha contribuido bastante al logro de objetivos de negocios por medio del diseño de experiencias del cliente y usuario, siempre enfocado en resultados y marcando la diferencia.',
  },
  {
    id: '08',
    name: 'Olimpia Coria',
    role: 'UX Lead | Customer Experience Manager',
    company: 'Grupo Financiero Banorte',
    text: 'Su habilidad para comprender las necesidades de los usuarios, identificar áreas de mejora y proponer soluciones innovadoras es realmente destacable; en cada proyecto en el que ha trabajado, ha dejado una marca de buen trabajo y compromiso.',
  },
]
