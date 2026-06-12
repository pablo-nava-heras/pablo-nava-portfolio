export interface ArtifactDetail {
  name: string
  description: string
  howToUse: string
  output: string
}

export interface Stage {
  name: string
  question?: string
  objective?: string
  roles?: string[]
  deliverables?: string[]
  artifacts: string[]
}

export interface Methodology {
  id: string
  name: string
  description: string
  objective: string
  whenToUse?: string[]
  stages: Stage[]
}

export const artifactLibrary: Record<string, ArtifactDetail> = {
  'Entrevistas a usuarios': {
    name: 'Entrevistas a usuarios',
    description: 'Conversaciones estructuradas o semi-estructuradas con usuarios reales para descubrir motivaciones, frustraciones y comportamientos que no aparecen en los datos cuantitativos.',
    howToUse: 'Prepara una guía de preguntas abiertas. Realiza sesiones de 30-60 min. Graba con permiso. No guíes las respuestas — escucha y profundiza con "¿por qué?" y "cuéntame más".',
    output: 'Transcripciones o notas de investigación, citas directas de usuarios, patrones de comportamiento identificados entre entrevistas.',
  },
  'Mapa de empatía': {
    name: 'Mapa de empatía',
    description: 'Lienzo visual que organiza lo que el usuario dice, piensa, siente y hace en un contexto específico para alinear al equipo en una comprensión compartida.',
    howToUse: 'Completa los 4 cuadrantes (Dice, Piensa, Hace, Siente) con datos reales de investigación. Trabájalo en equipo para alinear perspectivas antes de definir el problema.',
    output: 'Comprensión compartida del usuario entre todas las disciplinas del equipo. Base empírica para la definición del problema.',
  },
  'Observación contextual': {
    name: 'Observación contextual',
    description: 'Técnica que consiste en observar a usuarios en su entorno natural mientras realizan las tareas bajo estudio, para capturar comportamientos reales que no declararían en entrevistas.',
    howToUse: 'Ve al contexto del usuario (trabajo, hogar, etc.). Observa sin intervenir. Documenta comportamientos, fricciones y workarounds. Complementa con preguntas breves al finalizar.',
    output: 'Insights sobre comportamientos reales (no declarados), identificación de fricciones ocultas, hallazgos que contradicen supuestos del equipo.',
  },
  'Personas': {
    name: 'Personas',
    description: 'Representaciones semi-ficticias pero basadas en datos reales de grupos de usuarios con características, objetivos y frustraciones comunes.',
    howToUse: 'Agrupa usuarios con comportamientos similares. Crea 2-4 personas representativas con nombre, contexto, objetivos y frustraciones. Valida con el equipo. Úsalas como referencia en todas las decisiones.',
    output: 'Arquetipos de usuario documentados que mantienen el foco en personas reales durante todo el ciclo de diseño y evitan el diseño para un "usuario imaginario".',
  },
  'Declaración del problema': {
    name: 'Declaración del problema',
    description: 'Enunciado claro y centrado en el usuario que describe la necesidad a resolver sin prescribir la solución.',
    howToUse: 'Formato: [Usuario] necesita [necesidad] porque [insight]. Evita incluir soluciones. Escríbelo desde la perspectiva del usuario, no del negocio. Valida con el equipo.',
    output: 'Problem Statement documentado que sirve como norte compartido para todas las decisiones de diseño del proyecto.',
  },
  'How Might We (HMW)': {
    name: 'How Might We (HMW)',
    description: 'Técnica que transforma problemas e insights en preguntas abiertas del tipo "¿Cómo podríamos...?" para abrir el pensamiento creativo sin prescribir soluciones.',
    howToUse: 'Reformula los insights de investigación en preguntas HMW. Genera entre 5-20 HMWs. El equipo vota las más prometedoras para idear sobre ellas en la fase siguiente.',
    output: 'Set de preguntas HMW priorizadas que enmarcan el espacio de soluciones y guían la fase de ideación.',
  },
  'Sesiones de Brainstorming': {
    name: 'Sesiones de Brainstorming',
    description: 'Sesiones estructuradas de generación de ideas en las que el equipo produce la mayor cantidad posible de conceptos sin juzgarlos durante la generación.',
    howToUse: 'Define el HMW o reto. Establece tiempo límite (10-15 min por ronda). Prohíbe críticas durante la generación. Cada idea en un post-it. Luego agrupa, dot-vote y prioriza.',
    output: 'Banco de ideas divergentes, conceptos priorizados listos para prototipar o desarrollar.',
  },
  'Sketches/Bocetos': {
    name: 'Sketches/Bocetos',
    description: 'Representaciones rápidas y de baja fidelidad de ideas de diseño que permiten explorar múltiples conceptos con mínimo esfuerzo y máxima velocidad.',
    howToUse: 'Dibuja rápido, no te preocupes por la calidad visual. Genera varios bocetos de la misma idea. Usa papel y lápiz. Úsalos para comunicar y discutir con el equipo antes de invertir en wireframes.',
    output: 'Set de conceptos visuales rápidos que facilitan la discusión, selección y comunicación de ideas al equipo.',
  },
  'Storyboards': {
    name: 'Storyboards',
    description: 'Secuencia visual (4-8 viñetas) que muestra cómo un usuario interactúa con un producto o servicio a lo largo del tiempo en un contexto específico.',
    howToUse: 'Define el escenario y el usuario. Dibuja cada paso de la interacción como viñeta. Incluye el contexto y las emociones del usuario. Úsalo para comunicar flujos completos al equipo.',
    output: 'Narrativa visual del flujo de uso que facilita la empatía con la experiencia completa e identifica momentos clave del diseño.',
  },
  'Prototipo de baja fidelidad': {
    name: 'Prototipo de baja fidelidad',
    description: 'Representación simple y rápida de una solución (papel, post-its, wireframes básicos) que permite validar conceptos con el mínimo esfuerzo y tiempo.',
    howToUse: 'Usa papel, recortes o Balsamiq. No inviertas en visual. Testea con usuarios reales lo antes posible. El objetivo es aprender, no presentar.',
    output: 'Artefacto testeable que valida la lógica del flujo y el concepto antes de invertir tiempo en diseño de alta fidelidad.',
  },
  'Prototipo de alta fidelidad': {
    name: 'Prototipo de alta fidelidad',
    description: 'Representación detallada e interactiva de la solución, cercana al producto real en apariencia y comportamiento. Diseñada para testing final y aprobación ejecutiva.',
    howToUse: 'Usa Figma, Framer u otra herramienta de prototipado. Incluye interacciones reales y todos los estados. Úsalo para testing de usabilidad final y presentaciones a stakeholders.',
    output: 'Prototipo interactivo listo para testing de usabilidad avanzado, aprobación ejecutiva y handoff a desarrollo.',
  },
  'MVP (Producto Mínimo Viable)': {
    name: 'MVP (Producto Mínimo Viable)',
    description: 'Versión funcional del producto con las características mínimas necesarias para ser usada por usuarios reales y generar aprendizaje validado.',
    howToUse: 'Define el set mínimo de funcionalidades para validar la hipótesis central. Lanza pronto con usuarios reales. Mide con métricas definidas. Itera basándote en datos, no suposiciones.',
    output: 'Producto funcional en producción que genera aprendizaje real de usuarios. Base para las siguientes iteraciones del roadmap.',
  },
  'Test de usabilidad': {
    name: 'Test de usabilidad',
    description: 'Sesión donde usuarios reales interactúan con un prototipo o producto mientras el equipo observa para identificar problemas de usabilidad.',
    howToUse: 'Define 3-5 tareas representativas. Recluta 5-8 usuarios del segmento objetivo. Observa sin intervenir ni guiar. Registra dónde fallan o se confunden. Analiza patrones entre sesiones.',
    output: 'Reporte de usabilidad con problemas identificados, nivel de severidad (crítico/mayor/menor) y recomendaciones priorizadas de mejora.',
  },
  'A/B Testing': {
    name: 'A/B Testing',
    description: 'Experimento controlado que compara dos versiones de un elemento (A vs B) para determinar cuál tiene mejor rendimiento según métricas definidas.',
    howToUse: 'Define una hipótesis clara y una sola variable a cambiar. Divide el tráfico al 50%. Define la métrica de éxito antes de correr el test. Espera significancia estadística antes de decidir.',
    output: 'Decisión de diseño validada con datos cuantitativos de comportamiento real. Evidencia que respalda la dirección elegida.',
  },
  'Sesiones de feedback': {
    name: 'Sesiones de feedback',
    description: 'Reuniones estructuradas para obtener retroalimentación cualitativa de usuarios o stakeholders sobre una solución de diseño específica.',
    howToUse: 'Prepara preguntas específicas sobre lo que quieres validar. Muestra el prototipo en contexto. Escucha activamente sin defender las decisiones. Documenta sin filtrar.',
    output: 'Insights cualitativos para refinar la solución. Backlog de mejoras priorizado. Alineación de stakeholders.',
  },
  'Desk Research': {
    name: 'Desk Research',
    description: 'Investigación secundaria que recopila y analiza información existente (estudios, datos del mercado, benchmarks, reportes) antes de realizar investigación primaria con usuarios.',
    howToUse: 'Define las preguntas de investigación. Busca en fuentes confiables y actualizadas. Documenta hallazgos con fuentes. Identifica los gaps que requieren investigación primaria.',
    output: 'Síntesis de conocimiento existente sobre el dominio, benchmarks competitivos y oportunidades identificadas para investigación primaria.',
  },
  'Entrevistas a stakeholders': {
    name: 'Entrevistas a stakeholders',
    description: 'Conversaciones estructuradas con las partes interesadas del negocio para entender los objetivos, restricciones y expectativas del proyecto desde el lado interno.',
    howToUse: 'Prepara preguntas sobre objetivos de negocio, restricciones técnicas, criterios de éxito y riesgos percibidos. Documenta y busca alineación entre áreas.',
    output: 'Comprensión de objetivos de negocio, restricciones del proyecto y criterios de éxito documentados y alineados entre stakeholders.',
  },
  'Diagrama de afinidad': {
    name: 'Diagrama de afinidad',
    description: 'Técnica para organizar grandes volúmenes de datos cualitativos (notas, citas, observaciones) en grupos temáticos para identificar patrones e insights.',
    howToUse: 'Escribe cada insight o dato en un post-it. Agrupa los relacionados sin categorías previas — deja que emerjan orgánicamente. Nombra los grupos. Identifica los patrones más relevantes.',
    output: 'Síntesis visual de insights agrupados por temas que revela patrones, prioridades y oportunidades clave para la definición del problema.',
  },
  'Design Brief': {
    name: 'Design Brief',
    description: 'Documento que define el alcance del proyecto de diseño: el problema a resolver, los usuarios objetivo, las restricciones del proyecto y los criterios de éxito.',
    howToUse: 'Sintetiza los hallazgos de la fase de descubrimiento. Define claramente qué se va a diseñar y qué está fuera de alcance. Valida con stakeholders antes de continuar.',
    output: 'Documento de referencia validado que alinea al equipo sobre el problema, el usuario, el alcance y los criterios de éxito del proyecto.',
  },
  'Mapa de recorrido del usuario': {
    name: 'Mapa de recorrido del usuario',
    description: 'Visualización del proceso completo que atraviesa un usuario al interactuar con un producto o servicio, incluyendo acciones, pensamientos, emociones y puntos de dolor.',
    howToUse: 'Define el escenario y el usuario. Mapea todas las etapas del recorrido. Documenta acciones, pensamientos, emociones y puntos de dolor por etapa. Valida con usuarios reales.',
    output: 'Mapa visual que revela oportunidades de mejora, moments of truth y los puntos de máximo dolor en la experiencia del usuario.',
  },
  'Design Studios': {
    name: 'Design Studios',
    description: 'Sesión de co-diseño colaborativo donde el equipo multidisciplinario genera soluciones visuales mediante ciclos rápidos de sketch, presentación y crítica.',
    howToUse: 'Define el reto. Cada participante genera bocetos individuales (5-8 min en silencio). Se presentan y critican en 2 min por persona. Se itera. Se vota lo más prometedor.',
    output: 'Set de conceptos co-creados con alineación del equipo sobre la dirección de diseño. Diversidad de perspectivas capturada en ideas concretas.',
  },
  'Wireframes': {
    name: 'Wireframes',
    description: 'Representaciones esquemáticas de baja o media fidelidad de una interfaz que muestran estructura, jerarquía y flujo sin diseño visual definitivo.',
    howToUse: 'Dibuja la estructura de cada pantalla. Define la jerarquía de información. Muestra los flujos entre pantallas. No incluyas color ni tipografía definitiva — enfócate en la lógica.',
    output: 'Estructura y flujo de la interfaz validada antes de invertir en diseño visual de alta fidelidad. Base para el feedback de stakeholders y desarrollo.',
  },
  'User Flows': {
    name: 'User Flows',
    description: 'Diagrama que muestra el camino completo que recorre un usuario a través de un producto para completar una tarea específica, incluyendo decisiones y rutas alternativas.',
    howToUse: 'Define el punto de entrada y el objetivo final. Mapea cada paso y decisión. Incluye rutas alternativas, estados de error y condiciones edge case. Valida con el equipo técnico.',
    output: 'Diagrama de flujo completo que sirve como referencia para diseño, desarrollo y QA. Reduce ambigüedad en el proceso de implementación.',
  },
  'Design System': {
    name: 'Design System',
    description: 'Colección de componentes reutilizables, tokens de diseño (color, tipografía, espaciado) y directrices que permiten construir productos consistentes a escala.',
    howToUse: 'Define tokens base. Construye componentes atómicos desde los más simples. Documenta patrones de uso y principios. Mantén en un repositorio centralizado accesible a todo el equipo.',
    output: 'Biblioteca de componentes y guías que permiten escalar el diseño con consistencia, reducen el tiempo de diseño en iteraciones y alinean a diseño y desarrollo.',
  },
  'Prototipo final': {
    name: 'Prototipo final',
    description: 'Representación interactiva de alta fidelidad de la solución final, con todos los detalles visuales y de interacción definidos y validados.',
    howToUse: 'Construye sobre el diseño aprobado. Incluye todas las interacciones, estados y transiciones. Úsalo para handoff a desarrollo y presentación ejecutiva final.',
    output: 'Prototipo interactivo listo para handoff con especificaciones completas y aprobación de stakeholders para desarrollo.',
  },
  'Especificaciones de diseño': {
    name: 'Especificaciones de diseño',
    description: 'Documentación técnica detallada que describe medidas, espaciados, colores, comportamientos y lógica de interacción para el equipo de desarrollo.',
    howToUse: 'Documenta medidas, colores exactos, tipografías y comportamientos de interacción. Usa herramientas como Figma Dev Mode. Valida con desarrolladores antes del inicio de implementación.',
    output: 'Documentación técnica que reduce la ambigüedad en el handoff y acelera el desarrollo. Referencia única de verdad para el equipo de implementación.',
  },
  'User research report': {
    name: 'User research report',
    description: 'Documento que consolida todos los hallazgos de la investigación de usuarios: metodología empleada, insights descubiertos, patrones identificados y recomendaciones accionables.',
    howToUse: 'Sintetiza todos los datos recopilados. Organiza por temas y hallazgos. Prioriza insights por impacto en el diseño. Incluye recomendaciones específicas y accionables.',
    output: 'Documento de referencia que respalda las decisiones de diseño con evidencia de usuarios reales y sirve como base para sprints de diseño y roadmap.',
  },
  'Jobs to be Done': {
    name: 'Jobs to be Done',
    description: 'Framework que describe las tareas funcionales, sociales y emocionales que los usuarios "contratan" a un producto para resolver en un contexto específico.',
    howToUse: 'Entrevista usuarios sobre situaciones de uso. Identifica el "trabajo" real que quieren hacer. Formato: Cuando [situación], quiero [motivación], para [resultado esperado].',
    output: 'Declaraciones de JTBD que reorientan el diseño hacia las necesidades reales del usuario, más allá de las features o funcionalidades superficiales.',
  },
  'Problem statement': {
    name: 'Problem statement',
    description: 'Enunciado preciso del problema a resolver, centrado en el usuario y sin prescribir soluciones. Documenta el "qué" antes del "cómo".',
    howToUse: 'Fórmula: [Usuario] + necesita + [necesidad] + porque + [insight]. Verifica que sea específico, centrado en el usuario y sin incluir la solución. Valida con el equipo.',
    output: 'Declaración del problema validada que guía todo el proceso de diseño y sirve como criterio de éxito para evaluar soluciones.',
  },
  'User stories': {
    name: 'User stories',
    description: 'Descripciones breves de funcionalidades desde la perspectiva del usuario final que capturan valor, contexto y criterios de aceptación.',
    howToUse: 'Formato: Como [tipo de usuario], quiero [acción], para [beneficio]. Mantén las historias pequeñas e independientes. Define criterios de aceptación verificables para cada una.',
    output: 'Backlog de historias de usuario con criterios de aceptación listos para estimación, priorización y desarrollo iterativo.',
  },
  'Criterios de aceptación': {
    name: 'Criterios de aceptación',
    description: 'Condiciones específicas y verificables que una solución debe cumplir para ser considerada completa y correcta desde la perspectiva del usuario y el negocio.',
    howToUse: 'Define condiciones medibles (no ambiguas). Incluye casos de uso normales y edge cases. Valida con producto y desarrollo antes de iniciar la implementación.',
    output: 'Lista de condiciones verificables que definen cuándo una historia de usuario está "done" y que sirven como base para QA y testing.',
  },
  'Mockups': {
    name: 'Mockups',
    description: 'Representaciones visuales estáticas de alta fidelidad de una interfaz que muestran el diseño visual definitivo sin interactividad.',
    howToUse: 'Aplica el sistema de diseño. Define cada estado de la interfaz (default, hover, loading, error, vacío). Organiza por pantalla y flujo. Presenta a stakeholders para aprobación visual.',
    output: 'Diseños visuales aprobados que sirven de referencia final para prototipado interactivo y handoff a desarrollo.',
  },
  'Flujos de usuario': {
    name: 'Flujos de usuario',
    description: 'Representación visual de los caminos que un usuario puede tomar a través de un producto para alcanzar sus objetivos, incluyendo decisiones y estados del sistema.',
    howToUse: 'Mapea el flujo principal (happy path) primero. Luego agrega flujos alternativos y de error. Valida la lógica con el equipo técnico antes de diseñar en detalle.',
    output: 'Diagrama de flujos completo que sirve como referencia para diseño detallado, desarrollo y testing. Elimina ambigüedad en la lógica del producto.',
  },
  'Prototipo navegable': {
    name: 'Prototipo navegable',
    description: 'Versión interactiva del diseño que permite a usuarios navegar entre pantallas y completar flujos como si fuera el producto real.',
    howToUse: 'Conecta las pantallas del mockup con interacciones reales. Define transiciones y estados. Incluye los flujos principales para testing. Úsalo en sesiones de testing moderadas o no moderadas.',
    output: 'Prototipo interactivo listo para sesiones de testing de usabilidad y validación con usuarios antes del desarrollo.',
  },
  'Escenarios de prueba': {
    name: 'Escenarios de prueba',
    description: 'Situaciones o tareas representativas, redactadas en lenguaje natural, que se utilizan para evaluar la usabilidad de un producto con usuarios reales.',
    howToUse: 'Define tareas que reflejen uso real (no pasos de tutorial). Redáctalas sin instrucciones sobre cómo hacerlo. Incluye contexto que haga la tarea realista. Pruébalas internamente antes del testing.',
    output: 'Set de tareas de testing que permiten evaluar los flujos críticos del producto de forma estandarizada entre sesiones.',
  },
  'Reporte de usabilidad': {
    name: 'Reporte de usabilidad',
    description: 'Documento que consolida los hallazgos de las sesiones de testing: problemas identificados, su severidad y recomendaciones priorizadas para resolver.',
    howToUse: 'Analiza videos o notas de todas las sesiones. Identifica patrones (problemas que aparecen en más de 1 usuario son sistemáticos). Clasifica por severidad. Propón soluciones concretas.',
    output: 'Reporte con problemas priorizados por severidad y recomendaciones accionables de mejora listas para agregar al backlog.',
  },
  'Insights accionables': {
    name: 'Insights accionables',
    description: 'Hallazgos de investigación convertidos en recomendaciones específicas y realizables que el equipo puede implementar en el producto o proceso.',
    howToUse: 'Por cada insight, define una acción recomendada concreta. Prioriza por impacto en usuario vs esfuerzo de implementación. Asigna responsables y timeframe.',
    output: 'Lista de acciones priorizadas con responsables asignados, listas para agregar al backlog del producto o al plan de mejora.',
  },
  'Backlog de mejoras': {
    name: 'Backlog de mejoras',
    description: 'Lista ordenada de mejoras identificadas mediante investigación y testing, priorizadas por impacto en la experiencia del usuario.',
    howToUse: 'Recopila todas las mejoras identificadas en sesiones de research y testing. Prioriza con el equipo usando criterios de impacto vs esfuerzo. Convierte en historias de usuario estimables.',
    output: 'Backlog priorizado de mejoras listo para estimación e incorporación al roadmap del producto en el siguiente ciclo.',
  },
  'Necesidades del usuario': {
    name: 'Necesidades del usuario',
    description: 'Definición documentada, basada en investigación, de lo que los usuarios necesitan lograr con el producto — sus objetivos funcionales y emocionales.',
    howToUse: 'Investiga antes de definir (no asumas). Documenta necesidades funcionales, de usabilidad y emocionales. Distingue entre necesidades (invariables) y soluciones (variables). Valida con usuarios reales.',
    output: 'Documento de necesidades del usuario que fundamenta todas las decisiones de producto y diseño, con evidencia de investigación.',
  },
  'Objetivos del producto': {
    name: 'Objetivos del producto',
    description: 'Metas de negocio que el producto debe alcanzar, expresadas en términos medibles y alineadas con la estrategia de la organización.',
    howToUse: 'Define en conjunto con stakeholders usando formato SMART (Específico, Medible, Alcanzable, Relevante, Tiempo). Asegura alineación con la estrategia corporativa y el NSM.',
    output: 'Objetivos de producto documentados, medibles y validados por stakeholders. Base para definir el alcance y priorizar el roadmap.',
  },
  'Especificaciones funcionales': {
    name: 'Especificaciones funcionales',
    description: 'Descripción detallada de las funcionalidades que el producto debe incluir y cómo deben comportarse ante diferentes inputs y condiciones.',
    howToUse: 'Define cada funcionalidad con claridad. Incluye casos de uso principales y edge cases. Prioriza usando MoSCoW (Must, Should, Could, Won\'t). Valida con desarrollo antes de diseñar.',
    output: 'Documento de requisitos funcionales validado por producto y tecnología que reduce la ambigüedad en el desarrollo.',
  },
  'Requisitos de contenido': {
    name: 'Requisitos de contenido',
    description: 'Definición de qué contenido debe existir en el producto, cómo se organiza, quién lo produce y con qué voz/tono.',
    howToUse: 'Audita el contenido existente. Define el contenido necesario por sección. Establece jerarquía y estructura. Define responsables de producción y actualización.',
    output: 'Inventario de contenido, guía de voz y estructura de información que aseguran consistencia en toda la experiencia del producto.',
  },
  'Diseño de interacción': {
    name: 'Diseño de interacción',
    description: 'Definición de cómo responde el sistema a las acciones del usuario, incluyendo comportamientos, estados del sistema y feedback en cada interacción.',
    howToUse: 'Mapea cada interacción posible del usuario con el sistema. Define todos los estados (activo, hover, focus, error, vacío, loading, success). Documenta con especificaciones claras.',
    output: 'Especificaciones de interacción completas que guían el diseño de interfaz detallado y el desarrollo. Reduce interpretaciones ambiguas.',
  },
  'Arquitectura de información': {
    name: 'Arquitectura de información',
    description: 'Organización y estructura del contenido e información en un producto digital para facilitar la navegación, comprensión y acceso al contenido.',
    howToUse: 'Realiza card sorting con usuarios para validar la organización natural. Define la taxonomía y jerarquía. Crea el sitemap. Valida la navegación con tree testing.',
    output: 'Estructura jerárquica del contenido validada con usuarios, que facilita la navegación y sirve de base para el diseño de navegación.',
  },
  'Diseño de interfaz': {
    name: 'Diseño de interfaz',
    description: 'Definición visual y funcional de los elementos de la interfaz: componentes, controles, su apariencia y su disposición en pantalla.',
    howToUse: 'Diseña basándote en el sistema de diseño establecido. Asegura consistencia entre pantallas. Valida accesibilidad (contraste, tamaño de toque, jerarquía). Documenta estados de cada componente.',
    output: 'Interfaz diseñada, consistente y accesible, lista para prototipado interactivo y handoff a desarrollo.',
  },
  'Diseño de navegación': {
    name: 'Diseño de navegación',
    description: 'Definición de cómo los usuarios se mueven entre las diferentes secciones, páginas y estados del producto de forma coherente e intuitiva.',
    howToUse: 'Define el modelo de navegación (tabs, sidebar, bottom nav, etc.) según el contexto de uso. Asegura coherencia. Valida con tree testing. Considera estados activos y rutas de retorno.',
    output: 'Sistema de navegación diseñado y validado que facilita el acceso al contenido y reduce la fricción de orientación dentro del producto.',
  },
  'Diseño de información': {
    name: 'Diseño de información',
    description: 'Organización y presentación visual de los datos e información para facilitar su comprensión, interpretación y uso en la toma de decisiones.',
    howToUse: 'Prioriza la información más importante con jerarquía visual. Usa las formas más efectivas de representar cada tipo de dato (tabla, gráfico, número grande). Diseña para la claridad, no la estética.',
    output: 'Presentación de información clara, jerarquizada y accionable que facilita la comprensión y toma de decisiones del usuario.',
  },
  'Diseño visual': {
    name: 'Diseño visual',
    description: 'Aplicación de principios estéticos (color, tipografía, espaciado, iconografía, imagen) para crear una experiencia visual coherente, funcional y alineada con la marca.',
    howToUse: 'Aplica el sistema de diseño. Mantén consistencia en todas las pantallas. Asegura accesibilidad (contraste mínimo AA). Valida con el equipo y stakeholders. Documenta decisiones visuales clave.',
    output: 'Diseño visual final aprobado con identidad consistente, listo para entrega a desarrollo y alineado con los estándares de la marca.',
  },
  'Diseño sensorial': {
    name: 'Diseño sensorial',
    description: 'Diseño de los aspectos sensoriales de la experiencia más allá de lo visual: sonido, respuesta háptica, animaciones y microinteracciones que dan feedback al usuario.',
    howToUse: 'Define microinteracciones significativas que comuniquen estado (éxito, error, proceso). Diseña feedback háptico si el contexto lo requiere. Especifica animaciones con duración, curva y propósito claros.',
    output: 'Especificaciones de animación, sonido y feedback háptico que completan la experiencia sensorial y hacen el producto más comunicativo.',
  },
  'Value Stream Map': {
    name: 'Value Stream Map',
    description: 'Diagrama que visualiza todos los pasos e información necesarios para entregar valor al cliente, permitiendo identificar desperdicios, cuellos de botella y oportunidades de mejora.',
    howToUse: 'Mapea el estado actual del proceso completo paso a paso. Registra tiempos de proceso y espera. Identifica desperdicios (esperas, retrabajo, aprobaciones innecesarias). Diseña el estado futuro deseado.',
    output: 'Mapa del flujo de valor con desperdicios identificados, métricas de tiempos documentadas y plan de mejora hacia el estado futuro.',
  },
  'Auditoría conductual': {
    name: 'Auditoría conductual',
    description: 'Análisis sistemático de los comportamientos actuales de los usuarios para identificar barreras, motivadores y oportunidades de cambio conductual en la experiencia.',
    howToUse: 'Combina datos cuantitativos (analytics, funnels) con investigación cualitativa (entrevistas, observación). Aplica el modelo COM-B (Capacidad, Oportunidad, Motivación) para diagnosticar el comportamiento.',
    output: 'Diagnóstico conductual con barreras y motivadores identificados, mapa de oportunidades de intervención priorizado por impacto.',
  },
  'Principios conductuales': {
    name: 'Principios conductuales',
    description: 'Aplicación de principios de psicología del comportamiento (defaults, social proof, reciprocidad, escasez, nudges) al diseño de la experiencia para facilitar el comportamiento deseado.',
    howToUse: 'Selecciona los principios relevantes para el comportamiento objetivo. Diseña nudges éticos (que faciliten, no manipulen). Documenta la hipótesis conductual de cada intervención de diseño.',
    output: 'Set de intervenciones de diseño basadas en principios conductuales, con hipótesis documentadas y métricas de éxito definidas para experimentación.',
  },
}

export const metodologias: Methodology[] = [
  {
    id: 'design-thinking',
    name: 'Design Thinking',
    description: 'Metodología centrada en las personas para comprender problemas complejos, redefinir oportunidades y desarrollar soluciones innovadoras mediante investigación, ideación, prototipado y validación continua.',
    objective: 'Generar soluciones innovadoras mediante la comprensión profunda de las necesidades del usuario.',
    whenToUse: [
      'Cuando el problema aún no está completamente claro',
      'Cuando se necesita entender profundamente a los usuarios antes de diseñar',
      'Cuando el equipo requiere explorar varias soluciones antes de decidir',
      'Cuando es importante validar temprano con usuarios reales',
      'Cuando diseño, negocio y tecnología necesitan alinearse en un marco compartido',
    ],
    stages: [
      {
        name: 'Empatizar',
        question: '¿Quiénes son nuestros usuarios y qué necesitan realmente?',
        objective: 'Desarrollar una comprensión empática del problema desde la perspectiva del usuario.',
        roles: ['UX Researcher', 'Diseñador UX', 'Product Manager'],
        deliverables: ['Documentación de investigación', 'Mapas de empatía', 'Insights de usuario'],
        artifacts: ['Entrevistas a usuarios', 'Mapa de empatía', 'Observación contextual'],
      },
      {
        name: 'Definir',
        question: '¿Cuál es el problema que realmente necesitamos resolver?',
        objective: 'Formular una declaración del problema clara y centrada en el usuario.',
        roles: ['Diseñador UX', 'Product Manager', 'Stakeholders'],
        deliverables: ['Personas', 'Problem Statement', 'Point of View (POV)'],
        artifacts: ['Personas', 'Declaración del problema', 'How Might We (HMW)'],
      },
      {
        name: 'Idear',
        question: '¿Cómo podríamos resolver este problema de forma innovadora?',
        objective: 'Explorar múltiples soluciones posibles mediante pensamiento divergente.',
        roles: ['Diseñador UX/UI', 'Product Designer', 'Equipo multidisciplinario'],
        deliverables: ['Sketches', 'Conceptos priorizados'],
        artifacts: ['Sesiones de Brainstorming', 'Sketches/Bocetos', 'Storyboards'],
      },
      {
        name: 'Prototipar',
        question: '¿Cómo se ve y funciona nuestra solución?',
        objective: 'Materializar ideas en prototipos para aprender mediante experimentación.',
        roles: ['Diseñador UI', 'Diseñador UX', 'Desarrollador Frontend'],
        deliverables: ['Prototipos interactivos', 'Especificaciones de diseño', 'MVP'],
        artifacts: ['Prototipo de baja fidelidad', 'Prototipo de alta fidelidad', 'MVP (Producto Mínimo Viable)'],
      },
      {
        name: 'Testear',
        question: '¿Qué piensan los usuarios de nuestra solución?',
        objective: 'Obtener insights sobre la solución propuesta y refinar basándose en evidencia.',
        roles: ['UX Researcher', 'Diseñador UX', 'Product Manager'],
        deliverables: ['Reporte de testing', 'Insights y aprendizajes', 'Backlog de mejoras'],
        artifacts: ['Test de usabilidad', 'A/B Testing', 'Sesiones de feedback'],
      },
    ],
  },
  {
    id: 'doble-diamante',
    name: 'Doble Diamante',
    description: 'Framework visual del Design Council que representa el proceso de diseño en cuatro fases: dos de divergencia (exploración) y dos de convergencia (definición y solución).',
    objective: 'Asegurar que el equipo explore ampliamente tanto el problema como la solución antes de converger en decisiones de diseño.',
    stages: [
      {
        name: 'Descubrir',
        question: '¿Qué necesitan los usuarios y en qué contexto viven?',
        objective: 'Entender el problema en profundidad explorando ampliamente antes de intentar solucionarlo.',
        roles: ['UX Researcher', 'Diseñador UX', 'Business Analyst'],
        deliverables: ['Research insights', 'Oportunidades identificadas', 'Contexto del problema'],
        artifacts: ['Desk Research', 'Entrevistas a usuarios', 'Entrevistas a stakeholders'],
      },
      {
        name: 'Definir',
        question: '¿Cuál es el problema correcto a resolver?',
        objective: 'Sintetizar los hallazgos en una definición clara y accionable del problema.',
        roles: ['Diseñador UX', 'Product Manager', 'Stakeholders'],
        deliverables: ['Design Brief', 'Problem statement', 'Criterios de éxito'],
        artifacts: ['Diagrama de afinidad', 'Design Brief', 'Mapa de recorrido del usuario'],
      },
      {
        name: 'Desarrollar',
        question: '¿Qué soluciones posibles existen para este problema?',
        objective: 'Explorar y desarrollar múltiples soluciones divergentes al problema definido.',
        roles: ['Diseñador UI/UX', 'Product Manager', 'Desarrollador'],
        deliverables: ['Conceptos de diseño', 'Wireframes', 'Prototipos'],
        artifacts: ['Design Studios', 'Wireframes', 'User Flows'],
      },
      {
        name: 'Entregar',
        question: '¿Cuál es la mejor solución y cómo la implementamos?',
        objective: 'Refinar y entregar la solución final lista para implementación.',
        roles: ['Diseñador UI', 'Desarrollador Frontend', 'Product Manager'],
        deliverables: ['Design System', 'Especificaciones finales', 'Producto lanzado'],
        artifacts: ['Design System', 'Prototipo final', 'Especificaciones de diseño'],
      },
    ],
  },
  {
    id: 'ucd',
    name: 'User-Centered Design',
    description: 'Filosofía de diseño que coloca al usuario en el centro de cada decisión a lo largo de todo el proceso de desarrollo, con iteración continua basada en feedback real.',
    objective: 'Crear productos que satisfagan genuinamente las necesidades de los usuarios mediante iteración continua basada en evidencia, no suposiciones.',
    whenToUse: [
      'Cuando el producto impacta directamente la experiencia del usuario final',
      'Cuando se necesita reducir fricción en flujos críticos del producto',
      'Cuando hay decisiones de diseño basadas en suposiciones no validadas',
    ],
    stages: [
      {
        name: 'Investigar',
        question: '¿Quiénes son nuestros usuarios y cuáles son sus necesidades reales?',
        roles: ['UX Researcher', 'Product Manager'],
        deliverables: ['User research report', 'Personas', 'Jobs to be Done'],
        artifacts: ['Entrevistas a usuarios', 'User research report', 'Jobs to be Done'],
      },
      {
        name: 'Definir',
        question: '¿Qué problema del usuario vamos a resolver?',
        roles: ['Diseñador UX', 'Product Manager'],
        deliverables: ['Problem statement', 'User stories', 'Criterios de aceptación'],
        artifacts: ['Problem statement', 'User stories', 'Criterios de aceptación'],
      },
      {
        name: 'Diseñar',
        question: '¿Cómo debe verse y funcionar la solución?',
        roles: ['Diseñador UX/UI'],
        deliverables: ['Wireframes', 'Mockups', 'Flujos de usuario'],
        artifacts: ['Wireframes', 'Mockups', 'Flujos de usuario'],
      },
      {
        name: 'Prototipar',
        question: '¿Cómo validamos la solución antes de desarrollar?',
        roles: ['Diseñador UI', 'Diseñador UX'],
        deliverables: ['Prototipo navegable', 'Escenarios de prueba'],
        artifacts: ['Prototipo navegable', 'Escenarios de prueba'],
      },
      {
        name: 'Evaluar',
        question: '¿La solución resuelve el problema del usuario?',
        roles: ['UX Researcher', 'Diseñador UX', 'Product Manager'],
        deliverables: ['Reporte de usabilidad', 'Insights accionables', 'Backlog de mejoras'],
        artifacts: ['Reporte de usabilidad', 'Insights accionables', 'Backlog de mejoras'],
      },
    ],
  },
  {
    id: 'cinco-planos',
    name: '5 Planos de Garrett',
    description: 'Framework de Jesse James Garrett que estructura el diseño UX en 5 capas de lo más abstracto a lo más concreto: estrategia, alcance, estructura, esqueleto y superficie.',
    objective: 'Asegurar que cada decisión de diseño esté fundamentada en la capa inferior antes de avanzar, evitando construir sobre bases inestables.',
    stages: [
      {
        name: 'Estrategia',
        question: '¿Por qué existe el producto y para quién?',
        objective: 'Definir las necesidades del usuario y los objetivos del producto como fundamento de todas las decisiones futuras.',
        roles: ['Product Manager', 'UX Researcher', 'Stakeholders'],
        deliverables: ['Documento de estrategia', 'Objetivos del producto', 'Necesidades del usuario'],
        artifacts: ['Necesidades del usuario', 'Objetivos del producto'],
      },
      {
        name: 'Alcance',
        question: '¿Qué incluye y qué excluye el producto?',
        objective: 'Definir las funcionalidades y el contenido que el producto tendrá en esta iteración.',
        roles: ['Product Manager', 'Diseñador UX', 'Tech Lead'],
        deliverables: ['Requisitos funcionales', 'Estrategia de contenido'],
        artifacts: ['Especificaciones funcionales', 'Requisitos de contenido'],
      },
      {
        name: 'Estructura',
        question: '¿Cómo se organiza e interconecta el contenido?',
        objective: 'Definir la organización del contenido y los patrones de interacción del sistema.',
        roles: ['Diseñador UX', 'Information Architect'],
        deliverables: ['Sitemap', 'Flujos de interacción'],
        artifacts: ['Diseño de interacción', 'Arquitectura de información'],
      },
      {
        name: 'Esqueleto',
        question: '¿Cómo se disponen los elementos en pantalla?',
        objective: 'Definir la disposición de los elementos de interfaz, navegación e información.',
        roles: ['Diseñador UX/UI'],
        deliverables: ['Wireframes', 'Wireflows'],
        artifacts: ['Diseño de interfaz', 'Diseño de navegación', 'Diseño de información'],
      },
      {
        name: 'Superficie',
        question: '¿Cómo se ve y se siente el producto?',
        objective: 'Aplicar el diseño visual y sensorial que completa la experiencia perceptiva.',
        roles: ['Diseñador UI', 'Motion Designer'],
        deliverables: ['UI Kit', 'Mockups finales'],
        artifacts: ['Diseño visual', 'Diseño sensorial'],
      },
    ],
  },
  {
    id: 'six-sigma',
    name: 'Six Sigma',
    description: 'Metodología de mejora de procesos basada en datos que busca reducir defectos y variabilidad mediante el ciclo DMAIC: Definir, Medir, Analizar, Mejorar y Controlar.',
    objective: 'Mejorar la calidad de los procesos de diseño y producto mediante decisiones basadas en datos y métricas, eliminando variabilidad y defectos.',
    stages: [
      {
        name: 'Definir',
        question: '¿Cuál es el problema y qué impacto tiene en el negocio?',
        objective: 'Identificar el problema, el alcance y los objetivos del proyecto con claridad.',
        roles: ['Product Manager', 'Diseñador UX', 'Stakeholders'],
        deliverables: ['Project Charter', 'SIPOC', 'Voz del cliente'],
        artifacts: ['Problem statement', 'Objetivos del producto'],
      },
      {
        name: 'Medir',
        question: '¿Cuál es el estado actual y cómo se está comportando el proceso?',
        objective: 'Recopilar datos sobre el proceso actual y establecer una línea base medible.',
        roles: ['Data Analyst', 'UX Researcher', 'Product Manager'],
        deliverables: ['Baseline de métricas', 'Mapa del proceso', 'Datos históricos'],
        artifacts: ['User research report', 'Value Stream Map'],
      },
      {
        name: 'Analizar',
        question: '¿Cuáles son las causas raíz de los defectos o problemas?',
        objective: 'Identificar las causas raíz que generan los defectos y la variabilidad del proceso.',
        roles: ['Data Analyst', 'Diseñador UX', 'Product Manager'],
        deliverables: ['Análisis de causa raíz', 'Hipótesis priorizadas'],
        artifacts: ['Diagrama de afinidad', 'Insights accionables'],
      },
      {
        name: 'Mejorar',
        question: '¿Qué soluciones eliminan las causas raíz identificadas?',
        objective: 'Diseñar e implementar soluciones basadas en el análisis de datos que reduzcan los defectos.',
        roles: ['Diseñador UX/UI', 'Product Manager', 'Desarrollador'],
        deliverables: ['Soluciones implementadas', 'Resultados de pruebas', 'Plan de implementación'],
        artifacts: ['Prototipo de alta fidelidad', 'A/B Testing', 'Test de usabilidad'],
      },
      {
        name: 'Controlar',
        question: '¿Cómo aseguramos que las mejoras se mantengan en el tiempo?',
        objective: 'Monitorear y mantener las mejoras implementadas para prevenir la regresión.',
        roles: ['Product Manager', 'Data Analyst', 'Equipo de operaciones'],
        deliverables: ['Plan de control', 'Dashboard de métricas', 'Documentación del proceso'],
        artifacts: ['Backlog de mejoras', 'Criterios de aceptación'],
      },
    ],
  },
  {
    id: 'bemate',
    name: 'BeMate',
    description: 'Framework de diseño conductual que integra principios de psicología del comportamiento para diseñar experiencias que guíen naturalmente al usuario hacia acciones deseadas.',
    objective: 'Diseñar experiencias que conecten objetivos de negocio con comportamientos esperados del usuario mediante intervenciones conductuales basadas en evidencia.',
    whenToUse: [
      'Cuando se necesita aumentar la conversión o adopción de una funcionalidad',
      'Cuando los usuarios saben qué hacer pero no lo hacen (brecha intención-acción)',
      'Cuando se diseñan flujos de onboarding, activación o retención',
    ],
    stages: [
      {
        name: 'Auditoría conductual',
        question: '¿Qué comportamientos existen hoy y qué los bloquea?',
        objective: 'Identificar barreras y motivadores del comportamiento actual para diagnosticar dónde intervenir.',
        roles: ['Behavioral Designer', 'UX Researcher', 'Product Manager'],
        deliverables: ['Diagnóstico conductual', 'Mapa de barreras', 'Oportunidades de intervención'],
        artifacts: ['Auditoría conductual', 'Entrevistas a usuarios', 'User research report'],
      },
      {
        name: 'Diseño de soluciones',
        question: '¿Qué intervenciones conductuales eliminan las barreras?',
        objective: 'Aplicar principios conductuales para diseñar intervenciones que faciliten el comportamiento deseado.',
        roles: ['Behavioral Designer', 'Diseñador UX/UI', 'Product Manager'],
        deliverables: ['Intervenciones diseñadas', 'Hipótesis conductuales', 'Prototipos'],
        artifacts: ['Principios conductuales', 'Prototipo de alta fidelidad', 'User Flows'],
      },
      {
        name: 'Experimentación',
        question: '¿Qué funciona y qué escalamos?',
        objective: 'Validar hipótesis conductuales mediante experimentación controlada y escalar lo que genera impacto.',
        roles: ['Product Manager', 'Data Analyst', 'Diseñador UX'],
        deliverables: ['Resultados de experimentos', 'Learnings documentados', 'Plan de escalado'],
        artifacts: ['A/B Testing', 'Insights accionables', 'Backlog de mejoras'],
      },
    ],
  },
]
